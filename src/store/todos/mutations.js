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
};
