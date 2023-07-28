import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import dataSlice from "./slices/dataSlice.js";
import { rootApi } from "./slices/rootApi.js";

const rootReducer = combineReducers({
  data: dataSlice,
});

export default configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer,
    rootReducer: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware),
});
