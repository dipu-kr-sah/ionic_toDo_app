export default {
  getAllTasks(s) {
    return s.allTasks;
  },
  getTaskById(s) {
    return (id) => {
      return s.allTasks.filter((el) => el.id == id)[0];
    };
  },
};
