import React from "react";
import { BlogItems, SlidebarCategoryBlog } from "../../components";

const BlogCategoriesPage = () => {
  return (
    <div className="flex">
      <div className="w-1/5 mr-24">
        <SlidebarCategoryBlog />
      </div>
      <div className="w-4/5">
        <BlogItems />
      </div>
    </div>
  );
};

export default BlogCategoriesPage;
