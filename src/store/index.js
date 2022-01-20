import users from "./users";
import todo from "./todos";
import { createStore } from "vuex";
export default createStore({
  modules: {
    users,
    todo,
  },
});
