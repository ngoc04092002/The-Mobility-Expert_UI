import React from "react";
import CategorieItem from "./CategorieItem";

const CategorieItems = ({
  title,
  categories,
  className,
  type = "",
  expandTitle = "",
}) => {
  return (
    <div className={`mx-[184px] my-20 ${className}`}>
      <h2 className="text-[36px] text-center font-semibold">{title}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        {categories.map((item, index) => (
          <CategorieItem
            key={index}
            title={item}
            type={type}
            expandTitle={expandTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorieItems;
