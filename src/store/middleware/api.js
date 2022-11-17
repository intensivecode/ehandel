import axios from "axios";
import { apiCallFailed, apiCallSucceeded } from "../api";

export const api = (store) => (next) => async (action) => {
  if (action.type !== "api/callBegan") return next(action);

  const { dispatch } = store;
  const { url, method, data, onStart, onSuccess, onFailed } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  try {
    const response = await axios.request({
      baseURL: "http://localhost:8000/api",
      url,
      method,
      data,
    });

    dispatch(apiCallSucceeded(response.data));

    if (onSuccess) {
      dispatch({ type: onSuccess, payload: response.data });
    }
  } catch (error) {
    dispatch(apiCallFailed(error));

    if (onFailed) {
      dispatch({ type: onFailed, payload: error });
    }
  }
};
