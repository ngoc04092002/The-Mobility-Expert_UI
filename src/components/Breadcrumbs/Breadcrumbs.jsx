import React from "react";

const Breadcrumbs = ({ title, isActive }) => {
  return (
    <div className="flex items-center">
      <p className="w-[6px] h-[6px] bg-[#C4C4C4] rounded-[100%] mx-[23px]"></p>
      <p
        className={
          isActive
            ? "text-[14px] font-semibold text-[#0DB14B]"
            : "text-[14px] text-sm text-[#414045]"
        }
      >
        {title}
      </p>
    </div>
  );
};

export default Breadcrumbs;
