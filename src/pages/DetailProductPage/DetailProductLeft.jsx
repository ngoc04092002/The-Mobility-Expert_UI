import React from "react";

import {
  Breadcrumbs,
  RangeLevel,
  ReviewItems,
  SwiperDetailProduct,
} from "../../components";
import { useParams } from "react-router-dom";
import { AttachmentIcon, StarIcon } from "../../assets/icons";
import SubCategoryItem from "../../components/SubCategory/SubCategoryItem";

import CategoryItem5 from "../../assets/category_item5.png";
import CategoryItem6 from "../../assets/category_item6.png";
import { Rating } from "@mui/material";

const dataTags = ["4-Wheel", "Compact", "Foldable", "Portable"];
const dataSpecifications = [
  ["Weight Capacity", "220 lbs."],
  ["Overall Product Weight", "62 lbs."],
  ["Top Speed", "4 mph"],
  ["Maximum Range", "10 miles"],
  ["Turning Radius", '53"'],
  ["Climbing Angle", "6°"],
  ["Ground Clearance", '4"'],
  ["Seat to Ground", '22"-24"'],
  ["Folded Dimensions", '15.3"L x 16.5"W x 28"H'],
];

const dataReiviewsRating = [98, 34, 12, 2, 0];

const DetailProductLeft = () => {
  const params = useParams();

  return (
    <div className=" lg:w-[70%] w-full">
      <div className="flex items-center">
        <p className="mr-4 font-semibold">Tags</p>
        <ul className="flex items-center">
          {dataTags &&
            dataTags.map((tag) => (
              <li
                key={tag}
                className="mr-3 bg-[#38B76A1A] text-[14px] font-normal px-[10px] py-[8px] rounded-[5px]"
              >
                {tag}
              </li>
            ))}
        </ul>
      </div>
      <div className="mb-4 mt-6 flex items-center">
        <p className="text-[14px] text-sm text-[#414045]">Home</p>
        <Breadcrumbs
          title={params.type
            .split("-")
            .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
            .join(" ")}
          isActive={!params.id}
        />
        <Breadcrumbs
          title={"Drive Medical: ZooMe Auto-Flex 4-Wheel."}
          isActive={params.id}
        />
      </div>

      <div className="mt-7">
        <h1 className="font-semibold text-[24px]">
          Drive Medical: ZooMe Auto-Flex 4-Wheel
        </h1>
        <p className="text-[18px] font-medium my-2">
          Manufacturer: Drive Medical
        </p>
        <div className="flex items-center">
          <div className="flex">
            {new Array(5).fill(0).map((item, index) => (
              <StarIcon key={index} className="mr-1" />
            ))}
          </div>
          <p className="h-[23px] bg-[#C9C9CC] w-[1px] mx-6"></p>
          <p className="text-[#66666D] text-[14px] font-normal">104 reviews</p>
        </div>

        <SwiperDetailProduct />
      </div>

      <p className="border border-solid border-[#C9C9CC] opacity-40 mb-8 mt-16"></p>
      <div>
        <h1 className="text-[24px] font-semibold">Description</h1>
        <p className="text-[#414045] font-normal mt-7">
          The Go-Go Ultra X 4 Wheel is a great mobility scooter for anyone who’s
          on the go. This lightweight scooter easily disassembles into 5
          lightweight pieces, making transporting this scooter a breeze. An
          auto-latching lockup mechanism allows you to separate the frame with
          only one hand – disassembly takes just minutes. Additionally, an
          auto-connecting front to rear cable means that it’s easy to reassemble
          the Go-Go Ultra X 4 Wheel, so you’re back up and running quickly.
          <br />
          <br />
          The Go-Go Ultra X 4 Wheel is battery powered and features an off-board
          dual voltage charger. This charger can charge the battery either
          on-board or off-board, so you can pick the option that’s most
          convenient for you. A driving range of up to 8 miles on a single
          charge gives you plenty of freedom, and this power scooter has a top
          speed of 4.25 miles per hour.
          <br />
          <br />
          This scooter is an excellent choice for both indoor and outdoor use.
          It has a turning radius of 43.25” and a front mounting basket provides
          a convenient storage place. A cushioned height-adjustable seat offers
          excellent support for long hours of use, and the control handles are
          designed so that they are comfortable to hold. Flat-free tires ensure
          that you won’t be left stranded with a flat, adding a sense of
          security.
          <br />
          <br />
          The Go-Go Ultra X 4 Wheel offers excellent stability in a light weight
          scooter that is easy to disassemble. This power scooter is a great
          choice for anyone who is on the go and who enjoys their independence.
        </p>
      </div>

      <p className="border border-solid border-[#C9C9CC] opacity-40 my-8"></p>
      <div className="pr-4 h-[800px] overflow-scroll overflow-x-hidden">
        <h1 className="text-[24px] font-semibold">Reviews</h1>
        <div className="mt-7 flex flex-col items-center justify-center">
          <div className="flex items-center bg-[#F2F4F6] rounded-[63px] w-[400px] py-3 justify-between px-8">
            <Rating
              name="size-large"
              defaultValue={4.5}
              precision={0.5}
              size="large"
            />
            <div className="flex items-baseline">
              <h3 className="text-[28px] font-semibold mr-2">4.5</h3>
              <small className="text-[#66666D] text-[14px] font-normal">
                out of 5
              </small>
            </div>
          </div>

          <div className="mt-6 w-full">
            <h2 className="text-[18px] font-semibold text-center">
              164 customer reviews
            </h2>
            <div className="flex items-center justify-between mt-7">
              <div>
                <ul>
                  {dataReiviewsRating.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-3">{index + 1}</span>
                      <Rating
                        className="w-[20%] mx-1"
                        name="customized-1"
                        defaultValue={1}
                        max={1}
                      />
                      <RangeLevel
                        Realitylevel={(item / 120) * 100}
                        className="mr-2 min-w-[174px]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="h-[110px] bg-[#C9C9CC] w-[1px]"></p>
              <div>
                <ul>
                  {[
                    ["Quality", 5],
                    ["Value", 5],
                    ["Ease of Use", 5],
                    ["Ease Setup", 5],
                  ].map(([item, level], index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <p className="w-[40%]">{item}</p>
                      {new Array(level).fill(0).map((_, index) => (
                        <RangeLevel
                          Realitylevel={
                            item === "Ease Setup" && index === 4 ? 0 : 100
                          }
                          className="!w-[30px]"
                          key={index}
                        />
                      ))}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            <ReviewItems />
          </div>
        </div>
      </div>

      <p className="border border-solid border-[#C9C9CC] opacity-40 my-8"></p>
      <div>
        <h1 className="text-[24px] font-semibold">Specifications</h1>
        <table className="mt-7">
          <tbody>
            {dataSpecifications.map(([item1, item2], index) => (
              <tr key={index}>
                <td>{item1}</td>
                <td>{item2}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul className="flex items-center mt-7">
          {["Manual", "Brochure"].map((item, index) => (
            <li key={index} className="flex items-center justify-center mr-20">
              <AttachmentIcon /> <span className="ml-3">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="border border-solid border-[#C9C9CC] opacity-40 my-8"></p>
      <div>
        <h1 className="text-[24px] font-semibold">Warranty Info:</h1>
        <ul className="mt-4">
          {[
            "3 Year Limited Warranty on Frame",
            "1 Year Limited Warranty on Motor",
            "2 Year Limited Warranty on Electronics",
          ].map((item, index) => (
            <li className="leading-6 font-light" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <p className="border border-solid border-[#C9C9CC] opacity-40 my-8"></p>
      <div>
        <h1 className="text-[24px] font-semibold">Alternative Products</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-7">
          {[CategoryItem5, CategoryItem6].map((i, index) => (
            <SubCategoryItem key={index} imgSrc={i} id={index + 1} />
          ))}
        </div>
      </div>

      <p className="border border-solid border-[#C9C9CC] opacity-40 my-8"></p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="relative rounded-[5px] overflow-hidden">
          <img
            src="https://s3-alpha-sig.figma.com/img/4d50/5a43/c2af9bdc8b463e48de99fcdc3d0528f1?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WKNlkMPbIugq8HeqDnD8skEIv6wutwGPD27a8HfhCO8CLpU3smW9H84ZB8vogvroedgvWoJTNbwbKdovk34VEDDpx2Nc90vL5x1h-hyUkn3Pbe2t3vna8HF7T9G2t~96B5X6kn2-vl5WiCGpyP3W4lFfPFfLqBFkM5c2D2M8LawEKZhEyyoBzitjUovn79YYnQChQADLfjKnyZkbHg04Gk8qt5inLwe4wgq59J95khjUV3JOvyOFTRNgkj5TAb8PkCJFk5GbeKLCu9t-kkl18e7oVOvM5VyZMg-XM0uMKVRotTqUIzbTlwJjlCI6vbW2WYNSgofTLzK5iU8Ovk5CAQ__"
            alt=""
          />
          <p className="px-3 absolute inset-0 bg-[#00000033] text-[28px] text-white text-center flex items-center">
            Category Buying Guide
          </p>
        </div>
        <div className="relative rounded-[5px] overflow-hidden">
          <img
            src="https://s3-alpha-sig.figma.com/img/8881/587c/00ad4915e16b6d015ffc983a71f811da?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R4iCNn4O83qHVuJetk01kx4sChuF~~1e~1tyDsAqa2pHUdkCDdpJE7eDomlhzWnfKr9nkC~LKiu9hGL1-ysBJnoyxnoPthwYFj0-oE3u2~AWOLZcbGqRNT7UDIkWSTNo2weMeLtotWbuXl-vP-3TdRk42VHrW7~xDtUgkmqGUvYNT1hNop3n1HNHJtdPUC5fDYfVy9nswcLb1nJhtqrtaWuKzooacGYlISeC-ofDrWjUJLT4ozj-ksXJnIk9ZPdZ9GC2BjyJF5U3apjfqYo23Ln4Y3-f-5wib0F~2Wzrr4Mq~6xtpb~rm-UzuPt40picH9QRbwQfT4mjYjVuU~9-JQ__"
            alt=""
          />
          <p className="px-3 absolute inset-0 bg-[#00000033] text-[28px] text-white text-center flex items-center">
            Sub-Category Top 10 Article
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailProductLeft;
