import { useStore } from "vuex";
import tasks from "../data/tasks";

const store = useStore();
export default {
  createNewTask(taskDetails) {
    return store.dispatch("addNewTask", taskDetails);
  },
  deleteTaskByTaskId(taskId) {
    return store.dispatch("deleteTaskByTaskId", taskId);
  },
  updateTaskByTaskId(taskId) {
    return store.dispatch("updateTaskByTaskId", taskId);
  },
  getTaskByTaskId(taskId) {
    return store.dispatch("addNewTask", taskId);
  },
  getAllTasks() {
    return store.dispatch("stateTaskSetter", tasks);
  },
};
