import { configureStore } from "@reduxjs/toolkit";
import { api } from "./middleware/api";
import reducer from "./reducer";

function initStore() {
  return configureStore({ reducer, middleware: [api] });
}

export default initStore;
