const getDailyKcalLeft = (state) => state.daily.kcalLeft;
const getKcalConsumed = state => state.daily.kcalConsumed;
const getPercentsOfDailyRate = state => state.daily.percentsOfDailyRate;
const getDailyRate = state => state.daily.dailyRate;

const selectors = {
    getDailyKcalLeft,
    getKcalConsumed,
    getPercentsOfDailyRate,
    getDailyRate,
}

export default selectors;
