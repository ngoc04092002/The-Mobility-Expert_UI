import React from "react";
import { NavLink } from "react-router-dom";

const SlidebarCategoryBlog = () => {
  return (
    <div className="mt-6">
      <h1 className="text-[22px] font-semibold">Categories</h1>
      {new Array(3).fill(0).map((item, index) => (
        <div key={index}>
          <p className="border border-solid border-[#C9C9CC] opacity-70 mt-3 mb-4"></p>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#0DB14B]" : "text-[#414045]"
            }
            to={`/blog/category_${index + 1}`}
          >
            Categories 0{index + 1}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default SlidebarCategoryBlog;
