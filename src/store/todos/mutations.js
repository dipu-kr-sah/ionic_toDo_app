import { timer } from "../../helpers/helperFunctions";

export default {
  setAllTasks(state, allTasks) {
    state.allTasks = allTasks || [];
  },
  pushIntoStateAllTasks(state, task) {
    if (!state.allTasks) {
      state.allTasks = [];
    }
    state.allTasks.unshift(task);
  },
  updateTaskByIndex(state, data) {
    state.allTasks[data.index] = data.taskDetails;
  },
  deleteStateTaskByIndex(state, index) {
    state.allTasks.splice(index, 1);
  },
  sortBy(state, sortKey) {
    function sortingLogic(el) {
      const typeOfEl = typeof el;
      if (typeOfEl === "boolean") {
        if (el === true) {
          return 1;
        } else {
          return 0;
        }
      } else if (typeOfEl === "number") {
        return el;
      } else if (typeOfEl === "object") {
        if (!isNaN(new Date(el).getTime())) {
          return new Date(el).getTime();
        } else if (el.hours) {
          return el.hours;
        } else if (el.minutes) {
          return el.minutes;
        }
        return el.seconds;
      } else if (typeOfEl === "string") {
        return el;
      } else {
        return 0;
      }
    }
    state.allTasks.sort((el1, el2) => {
      let compare_1 = sortingLogic(el1[sortKey]);
      let compare_2 = sortingLogic(el2[sortKey]);
      console.log(compare_2, compare_1);
      if (isNaN(compare_2) && isNaN(compare_1)) {
        if (compare_2.match(/[a-zA-z 0-9]*/)) {
          return compare_2.localeCompare(compare_1);
        }
      }
      return 0;
    });
  },

  startTimerFor(state, index) {
    if (state.allTasks[index].timer) {
      return;
    }

    state.allTasks[index].timer = setInterval(async () => {
      const isMoreTimeLeft = timer(
        state.allTasks[index].timeElapsed,
        state.allTasks[index].timeRequired
      );
      // await pushNotification(
      //   index,
      //   state.allTasks[index].title,
      //   "time left" + JSON.stringify(state.allTasks[index].timeElapsed),
      //   state.allTasks[index].id
      // );
      if (!isMoreTimeLeft) {
        return this.commit("pauseTimerFor", index);
      }
    }, 1000);
  },

  pauseTimerFor(state, index) {
    clearInterval(state.allTasks[index].timer);
  },

  stopTimerFor(state, index) {
    state.allTasks[index].timeElapsed.minutes = 0;
    state.allTasks[index].timeElapsed.hours = 0;
    state.allTasks[index].timeElapsed.seconds = 0;
    clearInterval(state.allTasks[index].timer);
    state.allTasks[index].timer = null;
  },
};
