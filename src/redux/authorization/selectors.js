const getIsLoggedIn = (state) => state.user.isLoggedIn;
const getUserName = (state) => state.user.username;
const getUserId = (state) => state.user.id;
const getIsRefreshingUser = (state) => state.auth.isRefreshingUser;
const getWeight = state => state.user.userData.weight;

const getNotAllowedProducts = state => state.user.userData.notAllowedProducts;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getIsRefreshingUser,
    getUserId,
    getNotAllowedProducts,
    getWeight,
};

export default authSelectors;