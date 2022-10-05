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
    const respData = await fetchData("/goal-savings?size=80&&page=1", data);
    console.log("fetch goal savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};
export const displaySingleGoalSavings = async (id) => {
  console.log(id);
  try {
    const respData = await fetchData(`/goal-savings/single?id=${id}`);
    console.log("display single goal savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};

// Get all goal savings on admin
// export const displayAllGoalSavings = async (data = {}) => {
//   try {
//     const respData = await fetchData("/goal-savings/all", data);
//     console.log("display all goal savings data", respData);
//     return respData;
//   } catch (error) {
//     throw error
//   }
// };
export const updateGoalSavings = async (data = {}) => {
  try {
    const respData = await postData("/goal-savings/update", data);
    console.log("update goal savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};
export const deleteGoalSavings = async (data = {}) => {
  try {
    const respData = await postData("/goal-savings/delete", data);
    console.log("delete goal savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};



// fixed savings

export const createFixedSavings = async (data = {}) => {
  try {
    const respData = await postData("/fixed-Savings", data);
    console.log("register fixed savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};
export const displayFixedSavings = async (data = {}) => {
  try {
    const respData = await fetchData("/fixed-Savings", data);
    console.log("display fixed savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};
export const displaySingleFixedSavings = async (id) => {
  try {
    const respData = await fetchData(`/fixed-savings/single?id=${id}`);
    console.log("display single fixed savings data", respData);
    return respData;
  } catch (error) {
    throw error
  }
};
// members creation

export const addCoopMember = async (data = {}) => {
  const respData = await postData("/cooperative/add-members", data);
  console.log("add member data", respData);
  return respData;
};
export const addGoalSavingsMember = async (data = {}) => {
  const respData = await postData("/cooperative/goal-savings-members", data);
  console.log("add goal savings member data", respData);
  return respData;
};

