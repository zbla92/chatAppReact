import { get, post, put, remove } from "../utils/service";

export const signInService = (params) => post("/user/login", params);
