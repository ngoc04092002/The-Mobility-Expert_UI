import React from "react";
import { Link } from "react-router-dom";
import Brand from "../../assets/brand.png";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-8">
      <img src={Brand} alt="brand" />
      <h1 className="text-3xl font-bold">Not Found 404</h1>
      <Link
        to="/home"
        className="bg-[#0DB14B] px-4 py-2 rounded-md text-white mt-4"
      >
        Return
      </Link>
    </div>
  );
};

export default NotFound;
