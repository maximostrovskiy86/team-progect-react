// const getDailyRate = (state, date) => state.user.userData.dailyRate.filter(item => item.date === date);
const getDailyRate = (state) => state.user.userData.dailyRate;
const getNotAllowedProducts = state => state.user.userData.notAllowedProducts;
const getDate = state => state.user.date;

const selectors = {
    getDailyRate,
    getNotAllowedProducts,
    getDate,
}

export default selectors;