export default {
  getUserById(s) {
    return (id) => {
      return s.allUsers.filter((el) => el.id == id)[0];
    };
  },
};
