import React from "react";
import { NavLink } from "react-router-dom";
import TextInput from "../TextInput";

import Brand from "../../assets/brand.png";

const headerItems = ["Home", "Write a Review", "About us", "Blog"];

const Header = () => {
  return (
    <div className="mt-6 mx-[69px]">
      <p className="text-end font-semibold text-sm leading-[18.2px] mb-3">
        Find the right mobility product at the best price
      </p>
      <div className="flex items-center">
        <img src={Brand} alt="brand" className="w-[142px] h-12" />
        <div className="flex items-center justify-between lg:flex-nowrap flex-wrap ml-20 w-full">
          <ul className="flex items-center justify-around">
            {headerItems.map((item, index) => (
              <li key={item} className="text-sm mr-12 font-semibold">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#0DB14B]" : "text-[#414045]"
                  }
                  to={`/${item.toLowerCase().split(" ").join("-")}`}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
          <TextInput />
        </div>
      </div>
    </div>
  );
};

export default Header;
