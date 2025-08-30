import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
  const data = [
    {
      title: "Resource Access",
      description:
        "Visitors can access a wide range of resources, including ebooks, reports.",
    },
    {
      title: "Resource Access",
      description:
        "Visitors can access a wide range of resources, including ebooks, reports.",
    },
    {
      title: "Resource Access",
      description:
        "Visitors can access a wide range of resources, including ebooks, reports.",
    },
  ];
  return (
    <div className="bg-secondaryBackground w-full border-t mt-[-1px] py-16 flex flex-col justify-center items-center lg:px-16 sm:px-10 px-5 lg:gap-14 relative">
      <div className="flex flex-col jsutify-center items-center gap-5">
        <div className="flex justify-center items-center gap-3 p-1 w-fit h-fit lg:text-sm text-xs border rounded-full">
          <div className="bg-primary py-1 px-3 rounded-full">About</div>
          <p className="pr-2">Free, easy and fast.</p>
        </div>
        <h1 className="capitalize text-[2.5rem] font-semibold leading-normal text-center">
          The <span className="text-primary">Easiest Way</span>{" "}
          <br className="sm:block hidden" /> to Manage Your Business
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className="relative w-full h-[450px] border bg-background rounded-xl p-5 flex flex-col justify-end"
            >
              <div className="w-full flex flex-col justify-between gap-5 border bg-secondaryBackground rounded-md p-5">
                <div className="w-full flex justify-between items-center">
                  <h1 className="text-base font-semibold">{item.title}</h1>
                  <div className="rounded-full p-2 bg-primary">
                    <FiArrowUpRight size={20} />
                  </div>
                </div>
                <p className="text-secondary text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
