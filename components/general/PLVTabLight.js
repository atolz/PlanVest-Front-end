import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const SwitcherLight = ({ items = ["item1", "item2"], onChange = () => {}, className }) => {
  const [active, setActive] = useState(0);
  return (
    <div className={`flex items-center ${className}`}>
      {items.map((item, i) => {
        return (
          <div
            onClick={() => {
              setActive(i);
            }}
            className={`${
              active == i ? "border-b-2 border-solid border-0 border-pv_primary text-text" : "border-b-2 border-solid border-0 border-transparent text-label"
            } transition-all  py-[.8rem] font-rubik font-normal leading-[2.4rem] text-[1.6rem] cursor-pointer mr-[4rem] last:mr-0`}
            key={i}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default SwitcherLight;
