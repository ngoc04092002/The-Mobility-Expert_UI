import React from "react";

import Brand from "../../assets/brand.png";
import {
  AddressIcon,
  EmailIcon,
  FaceBookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../assets/icons";

const footerIntroInfo = [
  {
    title: "Privacy Policy",
    subTitle: "Contact Info:",
    infos: [
      {
        Icon: <AddressIcon />,
        content:
          "The Mobility Expert, LLC 3705 W Pico Blvd #696 Los Angeles, CA  90019-3451",
      },
      {
        Icon: <EmailIcon />,
        content:
          "The Mobility Expert, LLC 3705 W Pico Blvd #696 Los Angeles, CA  90019-3451",
      },
    ],
  },
  {
    title: "MOBILITY SCOOTERS",
    subTitle: "",
    infos: [
      {
        Icon: null,
        content: "Best Mobility Scooters",
      },
      {
        Icon: null,
        content: "Best 3-Wheel Mobility Scooters",
      },
      {
        Icon: null,
        content: "Best 4-Wheel Mobility Scooters",
      },
      {
        Icon: null,
        content: "Best All-Terrain Mobility Scooters",
      },
      {
        Icon: null,
        content: "Best Two Person Mobility Scooters",
      },
      {
        Icon: null,
        content: "Best Bariatric Mobility Scooters",
      },
      {
        Icon: null,
        content: "Best Folding Mobility Scooters",
      },
      {
        Icon: null,
        content: null,
      },
      {
        Icon: null,
        content: "Best Mobility Scooter Accessories",
      },
      {
        Icon: null,
        content: "Best Mobility Scooter Ramps",
      },
    ],
  },
  {
    title: "POWERED MOBILITY",
    subTitle: "",
    infos: [
      {
        Icon: null,
        content: "Best Electric Wheelchairs",
      },
      {
        Icon: null,
        content: "Best Elevating Seat Wheelchairs",
      },
      {
        Icon: null,
        content: "Best Bariatric Electric Wheelchairs",
      },
      {
        Icon: null,
        content: "Best Battery Chargers",
      },
      {
        Icon: null,
        content: "Best Bath Lifts",
      },
      {
        Icon: null,
        content: "Best Batteries",
      },
    ],
  },
  {
    title: "MANUAL MOBILITY",
    subTitle: "",
    infos: [
      {
        Icon: null,
        content: "Best Transport Chairs",
      },
      {
        Icon: null,
        content: "Best Shower Wheelchairs",
      },
      {
        Icon: null,
        content: "Best Lightweight Wheelchairs",
      },
      {
        Icon: null,
        content: "Best Tilt-In-Space Wheelchairs",
      },
      {
        Icon: null,
        content: "Best Bariatric Home Beds",
      },
    ],
  },
];

const Footer = () => {
  return (
    <section>
      <p className="border border-solid border-[#C9C9CC] opacity-50"></p>
      <div className="mx-[184px] mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <img src={Brand} alt="brand" className="w-[160px] h-[54px]" />
          <h1 className="font-semibold text-[#0DB14B] text-[24px] col-span-3 place-content-center">
            Buying Guides and Articles
          </h1>
        </div>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {footerIntroInfo.map((introInfo) => (
            <li key={introInfo.title}>
              <h1 className="font-semibold text-[18px]">{introInfo.title}</h1>
              <h3 className="mt-3 text-[14px]">{introInfo.subTitle}</h3>
              <ul>
                {introInfo.infos.map((info, index) => {
                  if (!info.Icon && !info.content) {
                    return (
                      <li
                        key={introInfo.title + index}
                        className="flex items-start mt-3 border border-solid border-[#C9C9CC]"
                      ></li>
                    );
                  }
                  return (
                    <li
                      key={introInfo.title + index}
                      className="flex items-start mt-3"
                    >
                      <div className="mr-3">{info.Icon}</div>
                      <p className="font-normal text-[14px]">{info.content}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <p className="border border-solid border-[#C9C9CC] opacity-50 mt-16"></p>
      <div className="mb-4">
        <ul className="flex items-center justify-center mb-3 mt-6">
          <li>
            <FaceBookIcon />
          </li>
          <li className="mx-8">
            <InstagramIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
        </ul>
        <p className="text-center font-normal text-[12px]">
          © 2021 Scooters 'N Chairs®. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
