import React from "react";
import { Breadcrumbs } from "../../components";
import { SearchIcon } from "../../assets/icons";
import { MenuItem, Rating, Select } from "@mui/material";

const WriteAReviewPage = () => {
  return (
    <section className="mt-14 mx-[165px] mb-20">
      <div className="mb-4 mt-6 flex items-center">
        <p className="text-[14px] text-sm text-[#414045]">Home</p>
        <Breadcrumbs title={"Write a Review"} isActive={true} />
      </div>
      <div className="mt-8 px-4 h-[54px] w-[500px] bg-[#F2F4F6] flex items-center rounded-[5px]">
        <SearchIcon
          className="w-[17px] h-[17px] mr-2"
          stylePath="fill-[#66666D]"
        />
        <input
          className="flex-1 outline-none bg-transparent"
          type="text"
          placeholder="Drive Medical: ZooMe Auto-Flex 4-Wheel"
        />
      </div>
      <p className="border border-solid border-[#C9C9CC] opacity-70 mt-8 mb-10"></p>
      <div>
        <h5>Overall Rating</h5>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-[#F2F4F6] rounded-[34px] flex items-center justify-center px-10 py-2 w-[220px]">
            <Rating name="size-large" defaultValue={4} size="large" />
          </div>
          <ul>
            <li className="flex items-center">
              <p className="mr-4 w-[100px]">Comfort</p>{" "}
              <Rating name="size-medium" defaultValue={0} />
            </li>
            <li className="flex items-center mt-3">
              <p className="mr-4 w-[100px]">Features</p>{" "}
              <Rating name="size-medium" defaultValue={0} />
            </li>
          </ul>
          <ul>
            <li className="flex items-center">
              <p className="mr-4 w-[100px]">Ease of Use</p>{" "}
              <Rating name="size-medium" defaultValue={0} />
            </li>
            <li className="flex items-center mt-3">
              <p className="mr-4 w-[100px]">Value</p>{" "}
              <Rating name="size-medium" defaultValue={0} />
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-14">
        <label>Review Title</label>
        <div className="mt-3 px-4 h-[64px] w-full bg-[#F2F4F6] flex items-center rounded-[5px]">
          <input
            className="flex-1 outline-none bg-transparent"
            type="text"
            placeholder="Summarize your review or highlight an important detail"
          />
        </div>
      </div>
      <div className="mt-14">
        <label>Review Content</label>
        <textarea
          className="mt-3 p-4 w-full h-[250px] bg-[#F2F4F6] outline-none rounded-[5px]"
          placeholder="Tell people about your experience with the product"
          rows={6}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div className="mt-9">
          <label>Name</label>
          <div className="mt-3 px-4 h-[64px] w-full bg-[#F2F4F6] flex items-center rounded-[5px]">
            <input
              className="flex-1 outline-none bg-transparent"
              type="text"
              placeholder="Choose a name to accompany your review"
            />
          </div>
        </div>
        <div className="mt-9">
          <label>Email</label>
          <div className="mt-3 px-4 h-[64px] w-full bg-[#F2F4F6] flex items-center rounded-[5px]">
            <input
              className="flex-1 outline-none bg-transparent"
              type="text"
              placeholder="We will not display your email address on the site"
            />
          </div>
        </div>
        <div>
          <label>Sex</label>
          <Select
            labelId="label"
            id="select"
            value="select"
            className="w-full h-[64px] bg-[#F2F4F6]"
          >
            <MenuItem value="select">Select</MenuItem>
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
          </Select>
        </div>
        <div>
          <label>Age</label>
          <Select
            labelId="label"
            id="select"
            value="select"
            className="w-full h-[64px] bg-[#F2F4F6]"
          >
            <MenuItem value="select">Select</MenuItem>
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
          </Select>
        </div>
        <div>
          <label>Where did you purchase?</label>
          <Select
            labelId="label"
            id="select"
            value="select"
            className="w-full h-[64px] bg-[#F2F4F6]"
          >
            <MenuItem value="select">Select</MenuItem>
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
          </Select>
        </div>
        <div>
          <label>Who purchased?</label>
          <Select
            labelId="label"
            id="select"
            value="select"
            className="w-full h-[64px] bg-[#F2F4F6]"
          >
            <MenuItem value="select">Select</MenuItem>
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
          </Select>
        </div>
        <div></div>
        <div className="text-end">
          <button className="text-[14px] px-10 py-4 rounded-[5px] bg-[#0DB14B] text-white w-1/2">
            Send Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default WriteAReviewPage;
