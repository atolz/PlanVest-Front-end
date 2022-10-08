import { createContext, useEffect, useState } from "react";

export const MembersContext = createContext({
  fixedSavings: {},
  setFixedSavings: () => {},
  goalSavings: {},
  setGoalSavings: () => {},
  groupSavings: {},
  setGroupSavings: () => {},
  loans: {},
  setLoans: () => {},
});

const MembersContextProvider = ({ children }) => {
  const [fixedSavings, setFixedSavings] = useState({ data: null, hash: {} });
  const [goalSavings, setGoalSavings] = useState({ data: null, hash: {} });
  const [groupSavings, setGroupSavings] = useState({ data: null, hash: {} });
  const [loans, setLoans] = useState({ data: null, hash: {} });

  useEffect(() => {
    console.log("changein context", loans, fixedSavings, goalSavings);
  }, [fixedSavings, goalSavings]);

  return <MembersContext.Provider value={{ fixedSavings, setFixedSavings, goalSavings, setGoalSavings, groupSavings, setGroupSavings, loans, setLoans }}>{children}</MembersContext.Provider>;
};

export default MembersContextProvider;
