const isAuth = (state) => state.auth.isAuth;

const getUsername = (state) => state.auth.user.name;

export default {
  isAuth,
  getUsername,
};
