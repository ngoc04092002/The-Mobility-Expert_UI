import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ id, img }) => {
  return (
    <div className="mt-4">
      <Link to={`blog-detail/${id}`}>
        <img className="rounded-[5px]" src={img} alt="" />
        <span className="text-[#414045] text-[12px] font-normal">
          March 30, 2021
        </span>
        <h4 className="font-semibold my-2">
          Drive Medical: ZooMe Auto Flex Folding Scooter - FLEX-AUTO
        </h4>
        <p className="text-[#414045] text-[13px] limit-two-row">
          The Mobility Expert will try to get you the information you need to
          help you find....
        </p>
      </Link>
    </div>
  );
};

export default BlogItem;
