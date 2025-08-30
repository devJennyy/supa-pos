"use client";

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

const About = () => {
  const data = [
    {
      title: "Fast & Accurate Sales",
      description:
        "Process transactions quickly and track every sale in real-time easily.",
    },
    {
      title: "Inventory Management",
      description:
        "Monitor stock levels, get low-stock alerts, and update products effortlessly.",
    },
    {
      title: "Insights & Reports",
      description:
        "Understand your business trends with detailed sales and inventory reports.",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  return (
    <section className="bg-secondaryBackground w-full border-t mt-[-1px] lg:py-16 py-10">
      <div className="w-full max-w-[1440px] !mx-auto flex flex-col justify-center items-center xl:px-16 sm:px-10 px-5 lg:gap-14 gap-8">
        <div className="flex flex-col justify-center items-center gap-5">
          <motion.div
            className="flex justify-center items-center gap-3 p-1 w-fit h-fit lg:text-sm text-xs border rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="bg-primary py-1 px-3 rounded-full">About</div>
            <p className="pr-2">Helping your business thrive</p>
          </motion.div>

          <motion.h1
            className="capitalize lg:text-[2.5rem] text-2xl font-semibold leading-normal text-center px-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            The <span className="text-primary pr-1">Easiest Way</span>
            <br className="sm:block hidden" />
            to Manage Your Business
          </motion.h1>
        </div>

        {/* Desktop */}
        <motion.div
          className="lg:grid grid-cols-1 lg:grid-cols-3 gap-5 hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="group relative w-full xl:h-[450px] h-[350px] border bg-background rounded-2xl p-5 flex flex-col justify-end cursor-pointer"
              variants={cardVariants}
              whileHover={{ y: -16 }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-full flex flex-col justify-between gap-5 border bg-secondaryBackground rounded-xl p-5">
                <div className="w-full flex justify-between items-center">
                  <h1 className="text-base font-semibold">{item.title}</h1>
                  <div className="rounded-full p-2 bg-primary">
                    <FiArrowUpRight size={20} />
                  </div>
                </div>
                <p className="text-secondary text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:hidden">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="group relative w-full sm:max-w-[350px] sm:h-[380px] h-[320px] border bg-background rounded-2xl p-4 flex flex-col justify-end cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -16 }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="transition-opacity duration-500 w-full flex flex-col justify-between gap-5 border bg-secondaryBackground rounded-xl p-4">
                <div className="w-full flex justify-between items-center">
                  <h1 className="text-base font-semibold">{item.title}</h1>
                  <div className="rounded-full p-1.5 bg-primary">
                    <FiArrowUpRight size={16} />
                  </div>
                </div>
                <p className="text-secondary text-sm sm:pr-10">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
