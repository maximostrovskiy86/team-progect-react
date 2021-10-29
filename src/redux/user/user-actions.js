import { createAction } from "@reduxjs/toolkit";

const dailyRateRequest = createAction("register/dailyRateRequest");
const dailyRateSuccess = createAction("register/dailyRateSuccess");
const dailyRateError = createAction("register/dailyRateError");

export { dailyRateRequest, dailyRateSuccess, dailyRateError };