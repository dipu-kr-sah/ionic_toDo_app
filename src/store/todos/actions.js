export default {
  stateTaskSetter(context, data) {
    const startDate = new Date("01 august 2019");
    const endDate = new Date();
    context.commit(
      "setAllTasks",
      data.map((el) => {
        el.userId = Math.floor(Math.random() * 100);
        el.startDate = new Date(
          startDate.getTime() +
            Math.random() * (endDate.getTime() - startDate.getTime())
        );
        el.endDate = new Date(
          el.startDate.getTime() +
            Math.random() * (endDate.getTime() - el.startDate.getTime())
        );
        el.timeRequired = {
          hours: Math.ceil(Math.random() * 0),
          minutes: Math.ceil(Math.random() * 2),
          seconds: Math.ceil(Math.random() * 0),
        };
        el.timeElapsed = {
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
        el.timer = null;
        return el;
      })
    );
  },
  addNewTask(context, data) {
    data.userId = Math.round(Math.random() * 10);
    data.id = Math.round(Math.random() * 100);
    data.compelted = !!data.compelted || false;
    data.createdAt = new Date();
    context.commit("pushIntoStateAllTasks", data);
  },
  deleteTaskByIndex(context, taskIndex) {
    context.commit("pauseTimerFor", taskIndex);
    context.commit("deleteStateTaskByIndex", taskIndex);
  },
  updateTaskByTaskId(context, taskDetails) {
    // context.commit("pushIntoStateAllTasks", taskDetails);
    taskDetails.updatedAt = new Date();
    console.log(taskDetails);
  },
  updateTaskByIndex(context, taskDetails) {
    taskDetails.updatedAt = new Date();
    context.commit("updateTaskByIndex", taskDetails);
    // console.log(taskDetails);
  },
  sortByUsingKey(context, sortKey) {
    context.commit("sortBy", sortKey);
    // console.log(taskDetails);
  },
  startTimer({ commit }, index) {
    commit("startTimerFor", index);
  },
  pauseTimer({ commit }, index) {
    commit("pauseTimerFor", index);
  },
  stopTimer({ commit }, index) {
    commit("stopTimerFor", index);
  },
  emitNotificationFor({ commit }, index) {
    commit("pushNotification", index);
  },
};
