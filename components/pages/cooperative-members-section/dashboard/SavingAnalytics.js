import React from "react";
import PlainContainerTitle from "../../../layouts/PlainContainerTitle";

const SavingAnalytics = ({ className }) => {
  let savings = [
    { type: "Goal Savings", "Created Plans": 3, "Tot. Amt Saved": "N200,000", "Tot. Interest Earned": "N20,000" },
    { type: "Fixed Savings", "Created Plans": 3, "Tot. Amt Saved": "N200,000", "Tot. Interest Earned": "N20,000" },
    { type: "Group Savings", "Created Plans": 3, "Tot. Amt Saved": "N200,000", "Tot. Interest Earned": "N20,000" },
  ];
  return (
    <PlainContainerTitle className={className} title="Saving Analytics">
      {savings.map((saving, i) => {
        return (
          <div className="mt-[2.2rem]" key={i}>
            <p className=" text-[1.7rem] font-normal text-[#137C4B] font-rubik mb-[1.4rem]">{saving.type}</p>
            <div className="p-[2.7rem] rounded-secondary bg-[#F1F1F1]">
              {Object.entries(saving)
                .filter((el) => el[0] != "type")
                .map(([key, value], i) => {
                  return (
                    <div key={i} className="flex items-center justify-between flex-wrap mb-[1.8rem] last:mb-0">
                      <span className=" text-[1.4rem] text-[#666668] opacity-[.6] font-medium">{key}</span>
                      <span className=" font-medium text-[1.6rem] text-[#666668] text-left min-w-[16rem]">{value}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </PlainContainerTitle>
  );
};

export default SavingAnalytics;
