import React from "react";
import { NavLink } from "react-router-dom";

const TitleCategories = ({ dataTitleCategories, subTitles, type }) => {
  return (
    <div>
      <div className="grid grid-cols-4 lg:grid-cols-8 gap-[10px]">
        {dataTitleCategories.map((item) => (
          <NavLink
            key={item.title}
            to={`/category/${item.title.toLowerCase().split(" ").join("-")}`}
            className={({ isActive }) =>
              `text-[14px] rounded-[5px] py-[10px] px-[20px] place-content-center text-center inline-flex ${
                isActive
                  ? "bg-[#0DB14B] text-[#fff] font-semibold"
                  : "bg-[#F2F4F6] text-[#1C1E1F] font-normal"
              }`
            }
          >
            <p className="place-content-center"> {item.title}</p>
          </NavLink>
        ))}
      </div>
      <p className="border border-solid border-[#C9C9CC] opacity-40 my-4"></p>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-[10px]">
        {subTitles &&
          subTitles.map((item) => (
            <NavLink
              key={item}
              to={`/category/${type}/${item
                .toLowerCase()
                .split(" ")
                .join("-")}`}
              className={({ isActive }) =>
                `text-[14px] rounded-[5px] py-[10px] px-[20px] place-content-center text-center inline-flex ${
                  isActive
                    ? "bg-[#0DB14B] text-[#fff] font-semibold"
                    : "bg-[#F2F4F6] text-[#1C1E1F] font-normal"
                }`
              }
            >
              <p className="place-content-center"> {item}</p>
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default TitleCategories;
