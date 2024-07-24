import React from "react";
import { useParams } from "react-router-dom";
import {
  Breadcrumbs,
  CategorieItems,
  SlideShow,
  SubCategory,
  TextInput,
  TitleCategories,
} from "../../components";

export const titleCategories = [
  {
    title: "Mobility Scooters",
    subTitle: [
      "Sub Category 1",
      "Sub Category 2",
      "Sub Category 3",
      "Sub Category 4",
      "Sub Category 5",
      "Sub Category 6",
    ],
  },
  {
    title: "Manual Wheelchairs",
    subTitle: [
      "Sub Category 1",
      "Sub Category 2",
      "Sub Category 3",
      "Sub Category 4",
      "Sub Category 5",
      "Sub Category 6",
    ],
  },
  {
    title: "Power Wheelchairs",
    subTitle: [
      "Sub Category 1",
      "Sub Category 2",
      "Sub Category 3",
      "Sub Category 4",
      "Sub Category 5",
      "Sub Category 6",
    ],
  },
  {
    title: "Patient Lifts",
    subTitle: [
      "Sub Category 1",
      "Sub Category 2",
      "Sub Category 3",
      "Sub Category 4",
      "Sub Category 5",
      "Sub Category 6",
    ],
  },
  {
    title: "Walkers",
    subTitle: [
      "Sub Category 1",
      "Sub Category 2",
      "Sub Category 3",
      "Sub Category 4",
      "Sub Category 5",
      "Sub Category 6",
    ],
  },
  {
    title: "Bathroom",
    subTitle: [
      "Sub Category 1",
      "Sub Category 2",
      "Sub Category 3",
      "Sub Category 4",
      "Sub Category 5",
      "Sub Category 6",
    ],
  },
  {
    title: "Accessories",
    subTitle: [
      "Sub Category 1",
      "Sub Category 2",
      "Sub Category 3",
      "Sub Category 4",
      "Sub Category 5",
      "Sub Category 6",
    ],
  },
  {
    title: "Furniture",
    subTitle: [
      "Sub Category 1",
      "Sub Category 2",
      "Sub Category 3",
      "Sub Category 4",
      "Sub Category 5",
      "Sub Category 6",
    ],
  },
];

const SubCategoryPage = () => {
  const params = useParams();

  const subTitles =
    titleCategories.find(
      (item) => item.title.toLowerCase().split(" ").join("-") === params.type
    ).subTitle || [];

  return (
    <div className="mx-[184px] mt-9 mb-12">
      <div
        className={`flex ${
          params.sub_category ? "flex-col-reverse" : "flex-col"
        }`}
      >
        <div className="mb-4 mt-6 flex items-center">
          <p className="text-[14px] text-sm text-[#414045]">Home</p>
          <Breadcrumbs title={"Category"} isActive={!params.sub_category} />
          <Breadcrumbs title={"Sub-Category"} isActive={params.sub_category} />
        </div>
        <TitleCategories
          dataTitleCategories={titleCategories}
          type={params.type}
          subTitles={subTitles}
        />
      </div>
      <div className="relative h-[175px] rounded-[5px] mt-16">
        <img
          src="https://s3-alpha-sig.figma.com/img/4d50/5a43/c2af9bdc8b463e48de99fcdc3d0528f1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HP8iq1~uRGB3yEDhXw0Tm6MCgGjLo077o65MrGQlMi6QZr9IarrAIqQqpmfGVpPJMTQItZY9hpu19-tTE2iN-s-A7fhevvkq6vvNK5zn0ooRfDjL13U7pToP4letKQQjMF3l6pC7hM9YeK4kLQGNWScwN~T3RUBVLDV63E-i~o4PiUw8RMp-y66s0o-LVbzb9MviyLtzPOCIB7sXAQhH30tmzbNWCmGr8fJoED8lY6I-HfuLheGGZqJdl9wNv8DD6dXWDslo4HH63r3IwEuMBnan92A1ZYd3KLMsKjbpHO7FeCBxSMq-5Ko5xie1Ne3DIZAl0TMYtzSBDzOq-ZbtXg__"
          alt=""
          className="rounded-[5px] h-full w-full object-cover "
        />
        <h2 className="absolute inset-0 bg-[#00000036] rounded-[5px] flex items-center justify-center text-white text-[36px] font-semibold">
          {!params.sub_category
            ? "Category Buying Guide"
            : "Sub-Category Top 10 Article"}
        </h2>
      </div>

      {!params.sub_category && (
        <SlideShow
          labelContent={"Sub-Category Top 10 Articles"}
          buttonContent={"See All Top 10 Articles"}
          className={"mx-0"}
          cssLabelContent={"!text-[36px]"}
        />
      )}

      <div className="flex items-center justify-between mt-12 flex-wrap lg:flex-nowrap">
        <ul className="font-normal text-[16px]">
          <li className="leading-9">[Category] Facts and Figures:</li>
          <li className="leading-9">Number of Manufacturers: #</li>
          <li className="leading-9">Number of Products: #</li>
        </ul>
        <div>
          <p className="text-end font-semibold text-sm leading-[18.2px] mb-3">
            Find your [Category] Product
          </p>
          <TextInput />
          {!params.sub_category && (
            <p className="text-end text-[#0DB14B] font-semibold text-[16px] leading-[18.2px] mt-3">
              View all [Category]
            </p>
          )}
        </div>
      </div>

      {!params.sub_category ? (
        <CategorieItems
          title={"Sub-Categories"}
          categories={subTitles}
          className={"!mx-0"}
          type={params.type}
          expandTitle={"sub-category"}
        />
      ) : (
        <SubCategory />
      )}
    </div>
  );
};

export default SubCategoryPage;
