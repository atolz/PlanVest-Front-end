import React from "react";

const TabFilled = ({ items = [], onChange = () => {}, active, className, ...props }) => {
  return (
    <div {...props} className={`grid gap-[1rem] grid-flow-col items-center overflow-x-scroll scroll_hide ${className}`}>
      {items.map((item, i) => {
        return (
          <div
            onClick={() => {
              onChange(item);
            }}
            className={`h-[4.6rem] cursor-pointer grid justify-center items-center px-[2rem] rounded-primary whitespace-nowrap  text-[1.6rem] leading-[24px] ${
              active == item ? "bg-pv_primary text-white" : " bg-[#E7EBED] text-text"
            }`}
            key={i}
          >
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TabFilled;
