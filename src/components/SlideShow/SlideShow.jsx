import React from "react";
import { Swiper as SwiperComponent } from "swiper/react";
import { SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slide-show.css";
import { Pagination, Navigation } from "swiper/modules";

const SlideShow = ({
  labelContent,
  buttonContent,
  className,
  cssLabelContent = "",
}) => {
  return (
    <div className={`mx-[69px] my-9 h-[500px] select-none ${className}`}>
      <SwiperComponent
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {new Array(14).fill(1).map((item, index) => (
          <SwiperSlide key={index} className="rounded-[5px] hidden">
            <img
              className="rounded-[5px] hidden"
              src="https://s3-alpha-sig.figma.com/img/4d50/5a43/c2af9bdc8b463e48de99fcdc3d0528f1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HP8iq1~uRGB3yEDhXw0Tm6MCgGjLo077o65MrGQlMi6QZr9IarrAIqQqpmfGVpPJMTQItZY9hpu19-tTE2iN-s-A7fhevvkq6vvNK5zn0ooRfDjL13U7pToP4letKQQjMF3l6pC7hM9YeK4kLQGNWScwN~T3RUBVLDV63E-i~o4PiUw8RMp-y66s0o-LVbzb9MviyLtzPOCIB7sXAQhH30tmzbNWCmGr8fJoED8lY6I-HfuLheGGZqJdl9wNv8DD6dXWDslo4HH63r3IwEuMBnan92A1ZYd3KLMsKjbpHO7FeCBxSMq-5Ko5xie1Ne3DIZAl0TMYtzSBDzOq-ZbtXg__"
              alt=""
            />
            <div className="rounded-[5px] w-full h-full absolute bg-[#00000036] flex items-center justify-center text-white">
              <p className={`text-[64px] ${cssLabelContent}`}>{labelContent}</p>
              <button className="text-[14px] w-[210px] h-[54px] bg-[#0DB14B] rounded-[5px] rounded-tr-none absolute right-0 bottom-0">
                {buttonContent}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};

export default SlideShow;
