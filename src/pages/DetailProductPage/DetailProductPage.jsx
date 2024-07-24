import React from "react";
import { TitleCategories } from "../../components";
import { titleCategories } from "../SubCategoryPage/SubCategoryPage";
import DetailProductLeft from "./DetailProductLeft";
import DetailProductRight from "./DetailProductRight";
const DetailProductPage = () => {
  return (
    <section className="mx-[50px] lg:mx-[164px] mt-16 mb-20">
      <TitleCategories
        dataTitleCategories={titleCategories}
        type={""}
        subTitles={[]}
      />
      <div className="flex mt-5">
        <DetailProductLeft />
        <DetailProductRight />
      </div>
    </section>
  );
};

export default DetailProductPage;
