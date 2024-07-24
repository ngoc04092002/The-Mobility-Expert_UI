import React from "react";
import SubCategoryPrice from "../helpers/SubCategoryPrice/SubCategoryPrice";
import SubCategoryReviewRating from "../helpers/SubCategoryReviewRating/SubCategoryReviewRating";
import SubCategoryManufacturer from "../helpers/SubCategoryManufacturer/SubCategoryManufacturer";
import SubCategorySelectedSpecs from "../helpers/SubCategorySelectedSpecs/SubCategorySelectedSpecs";

import CategoryItem1 from "../../assets/category_item1.png";
import CategoryItem2 from "../../assets/category_item2.png";
import CategoryItem3 from "../../assets/category_item3.png";
import CategoryItem4 from "../../assets/category_item4.png";
import CategoryItem5 from "../../assets/category_item5.png";
import CategoryItem6 from "../../assets/category_item6.png";
import SubCategoryItem from "./SubCategoryItem";
import Pagination from "../Pagination";

const imgs = [
  CategoryItem1,
  CategoryItem2,
  CategoryItem3,
  CategoryItem4,
  CategoryItem5,
  CategoryItem6,
  CategoryItem1,
  CategoryItem2,
  CategoryItem3,
  CategoryItem4,
  CategoryItem5,
  CategoryItem6,
];

const SubCategory = () => {
  return (
    <div>
      <p className="border border-solid border-[#C9C9CC] opacity-70 mt-8 mb-10"></p>
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-[222px] mr-8">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-[20px] leading-8 font-semibold text-[#1C1E1F]">
              Filter
            </h5>
            <p className="text-[#0DB14B] font-semibold text-[12px] cursor-pointer">
              CLEAR
            </p>
          </div>
          <SubCategoryPrice />
          <SubCategoryReviewRating />
          <SubCategoryManufacturer />
          <SubCategorySelectedSpecs />
          <p className="border border-solid border-[#C9C9CC] opacity-70"></p>
          <button className="text-[14px] text-[#0DB14B] border border-solid border-[#0DB14B] text-center w-full py-3 rounded-[5px] mt-8 hover:bg-[#0db14c0a]">
            Apply Filter
          </button>
        </div>
        <div className="mt-6 lg:mt-0 w-full">
          <h2 className="mb-7 text-left font-semibold text-[24px]">
            Sub Category 2
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {imgs.map((i, index) => (
              <SubCategoryItem key={index} imgSrc={i} id={index + 1} />
            ))}
          </div>
          <p className="border border-solid border-[#C9C9CC] opacity-70 mt-2 mb-10"></p>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
