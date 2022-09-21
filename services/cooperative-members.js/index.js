import { axiosBaseInstance } from "../../axios";
import fetchData from "../../utils/fetchData";
import postData from "../../utils/postData";

export const register = async (data = {}) => {
  const respData = await postData("/auth?type=coop", data);
  console.log("register resp data", respData);
  return respData;
};

export const verifyToken = async (data = {}) => {
  const respData = await postData("/auth/verify?type=coop", data);
  console.log("register resp data", respData);
  return respData;
};
export const login = async (data = {}) => {
  const respData = await postData("/auth/login?type=coop", data);
  console.log("register resp data", respData);
  return respData;
};
