import { useStore } from "vuex";
import users from "../data/users";
const store = useStore();
export default {
  addNewUser(userDetails) {
    return store.dispatch("addNewTask", userDetails);
  },
  deleteUserByUserId(userId) {
    return store.dispatch("deleteTaskByTaskId", userId);
  },
  updateUserByUserId(userId) {
    return store.dispatch("updateTaskByTaskId", userId);
  },
  getUserByUserId(userId) {
    return store.dispatch("addNewTask", userId);
  },
  getAllUsers() {
    return store.dispatch("addNewTask", users);
  },
};
