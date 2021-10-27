const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.username;

const getIsRefreshingUser = (state) => state.auth.isRefreshingUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRefreshingUser,
};

export default authSelectors;
