import React from "react";

const PopupLayout = ({ children, title = "title", onClose }) => {
  return (
    <div>
      <div style={{ border: "1px solid var(--color-border" }} className="flex items-center  h-[7rem] px-[3.2rem] justify-between">
        <h2 className="text-[1.8rem] font-normal">{title}</h2>
        <p onClick={onClose}>close</p>
      </div>
      <main className="px-[3.2rem] pt-[1.5rem] pb-[3.8rem]">{children}</main>
    </div>
  );
};

export default PopupLayout;
