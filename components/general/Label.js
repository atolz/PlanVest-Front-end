import React from "react";

const Label = ({ className, text, color, type = "success", hasBg = true }) => {
  const colorTypes = {
    warn: "",
    error: "",
    success: "",
  };
  const getColor = (type) => {
    if (type == "success") {
      return "var(--color-primary-main)";
    }
    if (type == "error") {
      return "var(--color-error)";
    }
    if (type == "warn") {
      return "var(--color-warn)";
    }
  };
  return (
    <div className={`relative ${className}`}>
      <span style={{ color: type ? getColor(type) : color }} className={` text-[1.4rem] font-medium absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2`}>
        {text}
      </span>

      <div
        style={{ background: type ? getColor(type) : color }}
        className={`flex items-center justify-center  py-[.9rem] rounded-primary min-w-[12rem] h-[3.7rem] opacity-[.1] relative ${hasBg ? " opacity-100" : " opacity-0"}`}
      ></div>
    </div>
  );
};

export default Label;
