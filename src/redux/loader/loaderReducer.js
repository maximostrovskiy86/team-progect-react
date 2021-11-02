import { createReducer } from "@reduxjs/toolkit";
import { setLoading } from "./loader-action";

export const loaderReducer = createReducer(false, {
  [setLoading]: (state) => !state,
});
