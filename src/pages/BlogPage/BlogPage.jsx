import React from "react";
import { useOutlet } from "react-router-dom";
import BlogCategoriesPage from "./BlogCategoriesPage";
import { Breadcrumbs } from "../../components";

const BlogPage = () => {
  const outlet = useOutlet();

  return (
    <section className="mt-14 mx-[165px] mb-24">
      <div className="mb-4 mt-6 flex items-center">
        <p className="text-[14px] text-sm text-[#414045]">Home</p>
        <Breadcrumbs title={"Blog"} isActive={!outlet} />
        {outlet && <Breadcrumbs title={"Health Care"} isActive={outlet} />}
      </div>
      <div>{outlet || <BlogCategoriesPage />}</div>
    </section>
  );
};

export default BlogPage;
