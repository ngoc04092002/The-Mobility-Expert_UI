import { Rating } from "@mui/material";
import React from "react";
import RangeLevel from "../RangeLevel";
import { EyeGreenIcon } from "../../assets/icons";

const ReviewItem = ({ data, isLineBreak = true }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
          <div className="w-[65px] h-[65px] mr-7">
            <img
              className="object-cover h-full w-full rounded-full"
              src={data.avatar}
              alt=""
            />
          </div>
          <div className="flex flex-col items-start">
            <h2>{data.name}</h2>
            <Rating name="size-small" defaultValue={5} size="small" />
            <small className="text-[#66666D] text-[12px] font-normal">
              15 Mar 2021
            </small>
          </div>
        </div>
        <img className="h-[51px] object-cover" src={data.logo} alt="" />
      </div>
      <p className="text-[12px] font-normal my-3">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <div className="bg-[#F2F4F6] rounded-[10px] p-4">
        <ul className="grid grid-cols-2 gap-y-3 gap-x-8">
          {data.levels &&
            data.levels.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                <p>{item.title}</p>
                <div className="flex items-center space-x-2 justify-between">
                  {item.levels.map((per, index) => (
                    <RangeLevel
                      key={index}
                      Realitylevel={per}
                      className="!w-[30px]"
                    />
                  ))}
                </div>
              </li>
            ))}
        </ul>
      </div>
      {isLineBreak ? (
        <p className="border border-solid border-[#C9C9CC] opacity-40 my-8"></p>
      ) : (
        <div className="flex items-center mt-3 cursor-pointer text-right place-content-end">
          <EyeGreenIcon className="mr-2" />
          <span className="text-[#0DB14B] font-semibold">
            Read More Reviews
          </span>
        </div>
      )}
    </div>
  );
};

export default ReviewItem;
