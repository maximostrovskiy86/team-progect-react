const getDailyRate = state => state.user.userData.dailyRate;
const getNotAllowedProducts = state => state.user.userData.notAllowedProducts;
const getDate = state => state.user.date;

const selectors = {
    getDailyRate,
    getNotAllowedProducts,
    getDate,
}

export default selectors;