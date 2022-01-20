export default {
  stateUsersSetter(context, data) {
    context.commit("setAllUsers", data);
  },
};
