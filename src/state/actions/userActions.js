import {
  LOGIN,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  LOGIN_FAIL,
} from "../constants";
import { signInService, registerService } from "../../services/userService";
import Cookies from "js-cookie";

export const loginUser = (params, history) => async (dispatch) => {
  try {
    const data = await signInService(params);
    if (data?.accessToken) Cookies.set("access_token", data.accessToken);
    if (data?.refreshToken) Cookies.set("refreshToken", data.refreshToken);
    dispatch({ type: LOGIN, payload: data });
    history.push("/");
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.data });
    console.log("[ERROR][LOGIN_FAIL]: ", error);
  }
};

export const registerUser = (params, history) => async (dispatch) => {
  try {
    const data = await registerService(params);

    dispatch({ type: REGISTER_USER, payload: data });
    history.push("/sign-in");
  } catch (error) {
    dispatch({ type: REGISTER_USER_FAIL, payload: error.data });
    console.log("[ERROR][REGISTER_USER_FAIL]: ", error);
  }
};
