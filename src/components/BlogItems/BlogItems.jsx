import React from "react";
import Pagination from "../Pagination";
import BlogItem from "./BlogItem";

import Blog1 from "../../assets/blog1.png";
import Blog2 from "../../assets/blog2.png";

const BlogItems = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-6 mb-16">
        {new Array(10).fill(1).map((item, index) => (
          <BlogItem
            key={index}
            id={index}
            img={index % 2 === 0 ? Blog1 : Blog2}
          />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default BlogItems;
