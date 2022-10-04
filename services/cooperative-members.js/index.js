import { axiosBaseInstance } from "../../axios";
import fetchData from "../../utils/fetchData";
import postData from "../../utils/postData";

export const register = async (data = {}) => {
  const respData = await postData("/auth?type=user", data);
  console.log("register resp data", respData);
  return respData;
};

export const verifyToken = async (data = {}) => {
  const respData = await postData("/auth/verify?type=user", data);
  console.log("register resp data", respData);
  return respData;
};
export const login = async (data = {}) => {
  const respData = await postData("/auth/login?type=user", data);

  console.log("login resp data", respData);
  return respData;
};
export const initiateForgotPassword = async (data = {}) => {
  const respData = await postData("/auth/forgot-password?type=user", data);
  return respData;
};
export const resetPassword = async (data = {}, token) => {
  const respData = await postData("/auth/reset-password?type=user", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return respData;
};
