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
        el.timeRequiredToCompleteInHours = (Math.random() * 10).toFixed(1);
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
};
