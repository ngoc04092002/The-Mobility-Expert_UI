import React from "react";

import Scooter from "../../assets/scooter.png";
import "./categorie-item.css";
import { Link } from "react-router-dom";

const CategorieItem = ({ title, type, expandTitle }) => {
  return (
    <Link
      to={`/category${type && "/" + type}/${title
        .toLowerCase()
        .split(" ")
        .join("-")}`}
      className="category_item h-[255px] rounded-[5px] relative cursor-pointer"
    >
      <img
        src={Scooter}
        alt="scooter"
        className="h-full w-full object-cover rounded-[5px]"
      />
      <div className="category_item-active rounded-[5px] absolute bg-[#0DB14B] flex items-center justify-center inset-0 opacity-0">
        <p
          className={`${
            expandTitle ? "text-[24px]" : "text-[28px]"
          }  font-semibold text-white text-center`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};

export default CategorieItem;
