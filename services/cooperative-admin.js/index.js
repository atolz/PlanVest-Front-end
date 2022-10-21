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
export const displayGoalSavings = async () => {
  try {
    const respData = await fetchData("/goal-savings?size=50&&page=1");
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
// cooperative admin loan 

// export const createLoan = async (data = {}) => {
//   const respData = await postData("/cooperative/add-members", data);
//   console.log("create loan data", respData);
//   return respData;
// };

export const displaySingleLoan = async (id) => {
  const respData = await fetchData(`/loan/single?id=${id}`, data);
  console.log("get each loan", respData);
  return respData;
};
export const displayAllLoan = async (data = {}) => {
  const respData = await postData("/loan/coop?size=1000&&page=1", data);
  console.log("get all created loan data", respData);
  return respData;
};

// cooperative investments


export const displaySingleInvestment = async (id) => {
  const respData = await fetchData(`/investments/single?id=${id}`);
  console.log("get individual investment data", respData);
  return respData;
};
// export const displayAllInvestment = async () => {
//   const respData = await fetchData("/investments/all-investment?size=1000&&page=1");
//   console.log("get all investment data", respData);
//   return respData;
// };
// export const displayAllInvestmentss = async () => {
//   const respData = await fetchData("/investments/all?size=1000&&page=1");
//   console.log("get all investment data", respData);
//   return respData;
// };

export const displayAllCoopInvestment = async () => {
  const respData = await fetchData("/investments/coop?size=1000&&page=1");
  console.log("get all cooperative investment data", respData);
  return respData;
};
export const approveInvestment = async (id) => {
  const respData = await postData(`/investments/approve?id=${id}`);
  console.log("approve a cooperative investment", respData);
  return respData;
};
export const updateInvestment = async (id) => {
  const respData = await postData(`/investments/update?id=${id}`);
  console.log("update cooperative investment data", respData);
  return respData;
};
export const deleteInvestment = async (id) => {
  const respData = await postData(`/investments/delete?id=${id}`);
  console.log("delete a cooperative investment data", respData);
  return respData;
};

// Members creation

// add private members to coop
export const      addCoopMember = async (data = {}) => {
  const respData = await postData("/cooperative/add-members", data);
  console.log("add existing member data", respData);
  return respData;
};

// add new members to coop DONE
export const addNewCoopMember = async (data = {}) => {
  try {
    const respData = await postData("/cooperative/add-new-members", data);
   return respData;
  } catch (error) {
    throw error
  }

};

// add member to a goal savings
export const addGoalSavingsMember = async (id, data = {}) => {
  const respData = await postData(`/cooperative/goal-savings-members?id=${id}`, data);
  console.log("add goal savings member data", respData);
  return respData;
};

// to get a cooperative member DONE
export const getCoopMember = async (id) => {
  const respData = await fetchData(`/cooperative/coopMember?id=${id}`);
  console.log("this is to view a coop member", respData);
  return respData;
};

// updating a cooperative member NOT WORKING
export const updateCoopMember = async (id) => {
  const respData = await postData(`/cooperative/updateCoopMember?id=${id}`);
  console.log("update a coop member data", respData);
  return respData;
};
// get member of a cooperative TODO: DONE BUT RETURNS ONE INSTEAD OF ALL
export const getAllCoopMember = async () => {
  const respData = await fetchData(`/cooperative/all?size=1000&&page=1`);
  console.log("get all member of a coop", respData);
  return respData;
};

