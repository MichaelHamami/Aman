import * as api from "../api/index.js";
// import { fetchCalls, createCall } from "../api/index.js";

export const getCalls = () => async () => {
  console.log("getCalls called in actions");

  try {
    const { data } = await api.fetchCalls();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createCall = (call) => async () => {
  try {
    console.log("createCall called in actions");
    const { data } = await api.createCall(call);
    return data;
  } catch (error) {
    console.log(error);
  }
};
