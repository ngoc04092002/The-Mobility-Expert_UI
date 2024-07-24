import React from "react";

import AboutUs1 from "../../assets/about_us1.png";
import Blog1 from "../../assets/blog1.png";
import Blog2 from "../../assets/blog2.png";
import BlogItem from "../../components/BlogItems/BlogItem";

const BlogDetailPage = () => {
  return (
    <>
      <div className="mx-[184px] mb-24">
        <div className="mt-16">
          <h1 className="text-3xl font-semibold text-center">
            Older people's mental health services
          </h1>
          <img
            src={AboutUs1}
            alt=""
            className="mt-9 w-full h-[360px] object-cover rounded-[10px]"
          />
          <p className="font-normal mt-7 text-[#414045] max-w-[672px] mx-auto">
            The Go-Go Ultra X 4 Wheel is a great mobility scooter for anyone
            who’s on the go. This lightweight scooter easily disassembles into 5
            lightweight pieces, making transporting this scooter a breeze. An
            auto-latching lockup mechanism allows you to separate the frame with
            only one hand – disassembly takes just minutes. Additionally, an
            auto-connecting front to rear cable means that it’s easy to
            reassemble the Go-Go Ultra X 4 Wheel, so you’re back up and running
            quickly.
            <br /> <br />
            The Go-Go Ultra X 4 Wheel is battery powered and features an
            off-board dual voltage charger. This charger can charge the battery
            either on-board or off-board, so you can pick the option that’s most
            convenient for you. A driving range of up to 8 miles on a single
            charge gives you plenty of freedom, and this power scooter has a top
            speed of 4.25 miles per hour.
            <br /> <br />
            This scooter is an excellent choice for both indoor and outdoor use.
            It has a turning radius of 43.25” and a front mounting basket
            provides a convenient storage place. A cushioned height-adjustable
            seat offers excellent support for long hours of use, and the control
            handles are designed so that they are comfortable to hold. Flat-free
            tires ensure that you won’t be left stranded with a flat, adding a
            sense of security.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
          <img className="h-[270px]" src={Blog1} alt="" />
          <img className="h-[270px]" src={Blog1} alt="" />
        </div>
        <p className="mt-10">
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
        <p className="border border-solid border-[#C9C9CC] opacity-70 my-16"></p>
      </div>
      <div className="mt-16">
        <h1 className="text-3xl font-semibold text-center">
          You may also interested
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {new Array(3).fill(1).map((item, index) => (
            <BlogItem
              key={index}
              id={index}
              img={index % 2 === 0 ? Blog1 : Blog2}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;
