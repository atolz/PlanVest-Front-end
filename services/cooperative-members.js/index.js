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
export const getUserProfile = async () => {
  const respData = await fetchData("/auth/profile");
  return respData;
};
export const resetPassword = async (data = {}, token) => {
  const respData = await postData("/auth/reset-password?type=user", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return respData;
};

// Savings
export const createPersonalFixedSavings = async (data = {}) => {
  const respData = await postData("/personal-fixed-savings/", data);
  return respData;
};
export const createPersonalGoalSavings = async (data = {}) => {
  const respData = await postData("/personal-goal-savings/", data);
  return respData;
};

export const getPersonalFixedSavings = async () => {
  const respData = await fetchData("/personal-fixed-Savings/user?page=1&size=10000");
  return respData;
};
export const getPersonalGoalSavings = async () => {
  const respData = await fetchData("/personal-goal-Savings/user?page=1&size=1000");
  return respData;
};
export const getSinglePersonalGoalSavings = async (id) => {
  const respData = await fetchData(`/personal-goal-Savings/single?id=${id}`);
  return respData;
};
export const getSinglePersonalFixedSavings = async (id) => {
  const respData = await fetchData(`/personal-fixed-Savings/single?id=${id}`);
  return respData;
};

export const buildSavingsHash = (savings) => {
  const savingsIdHash = {};

  savings.forEach((sav) => {
    savingsIdHash[sav.id] = sav;
  });

  return savingsIdHash;
};
