import { axiosBaseInstance } from "../../axios";
import fetchData from "../../utils/fetchData";
import postData from "../../utils/postData";

export const adminRegister = async (data = {}) => {
  const respData = await postData("/auth?type=coop", data);
  console.log("register resp data", respData);
  return respData;
};

export const adminVerifyToken = async (data = {}) => {
  const respData = await postData("/auth/verify?type=coop", data);
  console.log("register resp data", respData);
  return respData;
};
export const adminLogin = async (data = {}) => {
  const respData = await postData("/auth/login?type=coop", data);
  console.log("register resp data", respData);
  return respData;
};
// export const login = async (data = {}) => {
//   const respData = await postData("/auth/login?type=coop", data);
//   console.log("register resp data", respData);
//   return respData;
// };

// goal savings
export const createGoalSavings = async (data = {}) => {
  try {
    const respData = await postData("/goal-savings", data);
    console.log("register goal savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};
export const displayGoalSavings = async (data = {}) => {
  try {
    const respData = await getData("/goal-savings", data);
    console.log("fecth goal savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};


// fixed savings

export const createFixedSavings = async (data = {}) => {
  try {
    const respData = await postData("/fixed-Savings", data);
    console.log("register goal savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};
export const displayFixedSavings = async (data = {}) => {
  try {
    const respData = await getData("/fixed-Savings", data);
    console.log("fecth goal savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};

// members creation

export const addCoopMember = async (data = {}) => {
  const respData = await postData("/cooperative/add-members", data);
  console.log("register resp data", respData);
  return respData;
};
export const addGoalSavingsMember = async (data = {}) => {
  const respData = await postData("/cooperative/goal-savings-members", data);
  console.log("register resp data", respData);
  return respData;
};

