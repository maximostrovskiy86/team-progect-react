const getDailyKcalLeft = (state) => state.daily.kcalLeft;
const getKcalConsumed = state => state.daily.kcalConsumed;
const getPercentsOfDailyRate = state => state.daily.percentsOfDailyRate;
const getDailyRate = state => state.daily.dailyRate;
const getDailyRateByDay = (state, day) => state.user.days.find(item => item.date === day);
// const getProductsByDay = (state, day) => state.user.
const getNotAllowedProducts = state => state.daily.notAllowedProducts;
const getDate = state => state.daily.date;

const selectors = {
    getDailyKcalLeft,
    getKcalConsumed,
    getPercentsOfDailyRate,
    getDailyRate,
    getNotAllowedProducts,
    getDate,
    getDailyRateByDay,
}

export default selectors;
