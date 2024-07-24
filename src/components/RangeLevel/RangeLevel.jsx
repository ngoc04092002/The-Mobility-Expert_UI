import React from "react";

const RangeLevel = ({ className, Realitylevel = 10 }) => {
  return (
    <div
      className={`bg-[#C9C9CC] h-[6px] rounded-[43px] max-w-[174px] w-full overflow-hidden ${className}`}
    >
      <div
        className={`h-full bg-[#0DB14B] rounded-[43px]`}
        style={{ width: `${Realitylevel}%` }}
      ></div>
    </div>
  );
};

export default RangeLevel;
