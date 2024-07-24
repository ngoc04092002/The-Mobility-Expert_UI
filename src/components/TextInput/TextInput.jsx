import React from "react";
import ButtonSearch from "../ButtonSearch/ButtonSearch";

const TextInput = () => {
  return (
    <div className="flex items-center w-[445px] h-[54px] rounded-[5px] bg-[#F2F4F6] p-1">
      <input
        type="text"
        placeholder="Search by model # or keywords"
        className="bg-[#F2F4F6] outline-none flex-1 pl-5 pr-2"
      />
      <ButtonSearch />
    </div>
  );
};

export default TextInput;
