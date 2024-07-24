import React, { useState } from "react";

import DetailProduct1 from "../../assets/detail_product1.png";
import DetailProduct2 from "../../assets/detail_product2.png";
import DetailProduct3 from "../../assets/detail_product3.png";
import DetailProduct4 from "../../assets/detail_product4.png";
import DetailProduct5 from "../../assets/detail_product5.png";

const imgs = [
  DetailProduct1,
  DetailProduct2,
  DetailProduct3,
  DetailProduct4,
  DetailProduct5,
];

const SwiperDetailProduct = () => {
  const [selectImg, setSelectImg] = useState(0);

  return (
    <div className="mt-8 flex flex-col">
      <div className="relative h-[500px] w-[648px] text-center webkit-center">
        <img
          src={imgs[selectImg]}
          className="object-cover w-[500px] h-full"
          alt=""
        />
        <div className="bottom-0 left-0 absolute">
          <button className="text-[14px] px-10 py-4 rounded-[5px] bg-[#0DB14B] text-white">
            View All Photo
          </button>
        </div>
        <button
          className="absolute left-0 top-1/2 -translate-y-0.5"
          onClick={() => {
            if (selectImg <= 0) {
              return;
            }
            setSelectImg((prev) => prev - 1);
          }}
        >
          {"<"}
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-0.5"
          onClick={() => {
            if (selectImg >= 5) {
              return;
            }
            setSelectImg((prev) => prev + 1);
          }}
        >
          {">"}
        </button>
      </div>
      <div className="flex items-center justify-between mt-8 w-[648px]">
        {imgs &&
          imgs.map((item, index) => (
            <div
              onClick={() => {
                setSelectImg(index);
              }}
              key={index}
              className="w-[100px] h-[100px] rounded-[5px] overflow-hidden cursor-pointer"
            >
              <img src={item} alt="" className="object-cover rounded-[5px]" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SwiperDetailProduct;
