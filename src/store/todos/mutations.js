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
    state.allTasks.sort((el1, el2) => {
      let compare_1 = el1[sortKey];
      let compare_2 = el2[sortKey];
      if (compare_1 && isNaN(compare_1)) {
        if (compare_1.match(/[a-zA-z 0-9]*/)) {
          return compare_1.localeCompare(compare_2);
        }
        if (!isNaN(new Date(compare_1).getTime())) {
          compare_1 = new Date(compare_1).getTime();
        }
      }
      if (compare_2 && isNaN(compare_2)) {
        if (compare_2.match(/[a-zA-z 0-9]*/)) {
          return compare_2.localeCompare(compare_2);
        }
        if (!isNaN(new Date(compare_2).getTime())) {
          compare_2 = new Date(compare_2).getTime();
        }
      }
      return compare_1 - compare_2;
    });
  },
};
