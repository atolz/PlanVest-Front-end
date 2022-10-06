import { createContext, useEffect, useState } from "react";

export const MembersContext = createContext({ fixedSavings: {}, setFixedSavings: () => {}, goalSavings: {}, setGoalSavings: () => {}, groupSavings: {}, setGroupSavings: () => {} });

const MembersContextProvider = ({ children }) => {
  const [fixedSavings, setFixedSavings] = useState({ data: null, hash: {} });
  const [goalSavings, setGoalSavings] = useState({ data: null, hash: {} });
  const [groupSavings, setGroupSavings] = useState({ data: null, hash: {} });

  useEffect(() => {
    console.log("changein context", fixedSavings, goalSavings);
  }, [fixedSavings, goalSavings]);

  return <MembersContext.Provider value={{ fixedSavings, setFixedSavings, goalSavings, setGoalSavings, groupSavings, setGroupSavings }}>{children}</MembersContext.Provider>;
};

export default MembersContextProvider;