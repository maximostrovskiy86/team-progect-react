const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUserName = (state) => state.auth.user.username;

const getIsRefreshingUser = (state) => state.auth.isRefreshingUser;

const getUserId = (state) => state.auth.user.id;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRefreshingUser,
  getUserId,
};

export default authSelectors;
