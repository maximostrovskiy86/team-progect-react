const getIsLoggedIn = (state) => state.user.isLoggedIn;
const getUserName = (state) => state.user.username;
const getUserId = (state) => state.user.id;
const getIsRefreshingUser = (state) => state.auth.isRefreshingUser;

const getNotAllowedProducts = state => state.user.userData.notAllowedProducts;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getIsRefreshingUser,
    getUserId,
    getNotAllowedProducts,
};

export default authSelectors;