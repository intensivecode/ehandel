import axios from "axios";
import { apiCallFailed, apiCallSucceeded } from "../api";

export const api = (store) => (next) => async (action) => {
  if (action.type !== "api/callBegan") return next(action);

  const { url, method, data, onStart, onSuccess, onFailed } = action.payload;

  next(action);

  try {
    if (onStart) {
      store.dispatch({ type: onStart });
    }

    const response = await axios.request({
      baseURL: "http://localhost:8000/api",
      url,
      method,
      data,
    });

    store.dispatch(apiCallSucceeded(response.data));

    if (onSuccess) {
      store.dispatch({ type: onSuccess, payload: response.data });
    }
  } catch (error) {
    store.dispatch(apiCallFailed(error));

    if (onFailed) {
      store.dispatch({ type: onFailed, payload: error });
    }
  }
};
