const getIsLoggedIn = (state) => state.user.isLoggedIn;
const getUserName = (state) => state.user.username;
const getUserId = (state) => state.user.id;
const getIsRefreshingUser = (state) => state.auth.isRefreshingUser;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getIsRefreshingUser,
    getUserId,
};

export default authSelectors;