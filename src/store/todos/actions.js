export default {
  stateTaskSetter(context, data) {
    context.commit("setAllTasks", data);
  },
  addNewTask(context, data) {
    data.userId = Math.round(Math.random() * 10);
    data.id = Math.round(Math.random() * 100);
    data.compelted = !!data.compelted || false;
    context.commit("pushIntoStateAllTasks", data);
  },
  deleteTaskByTaskId(context, taskId) {
    context.commit("pushIntoStateAllTasks", taskId);
  },
  updateTaskByTaskId(context, taskDetails) {
    // context.commit("pushIntoStateAllTasks", taskDetails);
    console.log(taskDetails);
  },
  updateTaskByIndex(context, taskDetails) {
    context.commit("updateTaskByIndex", taskDetails);
    // console.log(taskDetails);
  },
};
