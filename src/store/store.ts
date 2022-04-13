import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./reducers/LoaderSlice";
import { caseAPI } from "../services/CaseService";

const rootReducer = combineReducers({
  [caseAPI.reducerPath]: caseAPI.reducer,
  loaderReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(caseAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
