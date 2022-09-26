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
  console.log("login resp data", respData);
  return respData;
};
export const initiateForgotPassword = async (data = {}) => {
  const respData = await postData("/auth/forgot-password?type=coop", data);
  return respData;
};
export const resetPassword = async (data = {}, token) => {
  const respData = await postData("/auth/reset-password?type=coop", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return respData;
};
