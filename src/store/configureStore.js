import { configureStore } from "@reduxjs/toolkit";
// import { api } from "./middleware/api";
import api from "./rtkApi";
import reducer from "./reducer";

function initStore() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      api.middleware,
    ],
  });
}

export default initStore;
