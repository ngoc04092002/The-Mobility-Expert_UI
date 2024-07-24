import React from "react";
import { EyeIcon, StarIcon } from "../../assets/icons";
import { Link, useParams } from "react-router-dom";

const SubCategoryItem = ({ id, imgSrc }) => {
  const params = useParams();
  return (
    <div className="mb-8">
      <div className="category_item-img relative">
        <img
          className="w-full h-[225px] object-cover cursor-default"
          src={imgSrc}
          alt=""
        />
        <Link
          to={`/category/${params.type}/detail-product/${id}`}
          className="cursor-pointer show_detail-btn hidden text-[14px] absolute bottom-0 left-0 w-full h-[54px] bg-[#0DB14B] opacity-90 items-center justify-center rounded-b-[5px]"
        >
          <EyeIcon />
          <p className="ml-2 text-white">View details</p>
        </Link>
      </div>
      <div className="mt-3">
        <p className="text-[#1C1E1F] font-normal text-[14px]">
          Drive Medical: ZooMe Auto Flex Folding Scooter - FLEX-AUTO
        </p>
        <div className="flex items-center justify-between">
          <div className="flex">
            {new Array(5).fill(0).map((item, index) => (
              <StarIcon key={index} className="mr-1" />
            ))}
          </div>
          <p className="h-[23px] bg-[#C9C9CC] w-[1px]"></p>
          <p className="text-[#66666D] text-[14px] font-normal">104 reviews</p>
        </div>
        <ul className="flex items-center mt-2">
          <li className="text-[16px] text-[#0DB14B] font-semibold mr-3">
            $979.00
          </li>
          <li className="text-[12px] text-[#66666D]">
            <strike>$1,259.00</strike>
          </li>
        </ul>
        <ul className="flex items-center text-[12px] mt-2">
          <li className="text-[#66666D]">You Save: </li>
          <li className="ml-1">$280.00 </li>
          <li className="ml-1">(22%)</li>
        </ul>
      </div>
    </div>
  );
};

export default SubCategoryItem;
