"use client";

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const Features = () => {
  const data = [
    {
      title: "Fast & Accurate Sales",
      description:
        "Process transactions quickly and track every sale in real-time.",
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
        staggerChildren: 0.4,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="features"
      className="scroll-mt-20 bg-secondaryBackground w-full border-t dark:border-border border-borderBrand !mt-[-1px] lg:py-16 py-10 transition-colors duration-500 ease-in-out"
    >
      <div className="w-full max-w-[1440px] !mx-auto flex flex-col justify-center items-center xl:px-16 sm:px-10 px-5 lg:gap-14 gap-8">
        <div className="flex flex-col justify-center items-center gap-5">
          <motion.div
            className="flex justify-center items-center gap-3 p-1 w-fit h-fit lg:text-sm text-xs bg-input/40 dark:bg-transparent border dark:border-border border-borderBrand/80 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="bg-primary py-1 px-3 rounded-full text-white">
              Features
            </div>
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
        <Link href="/login">
          <motion.div
            className="lg:grid grid-cols-1 lg:grid-cols-3 gap-5 hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {data.map((item, index) => (
              <motion.div
                key={index}
                className="group relative w-full xl:h-[450px] h-[350px] border border-borderBrand/50 dark:border-border bg-input/40 dark:bg-background rounded-2xl p-5 flex flex-col justify-end cursor-pointer overflow-hidden"
                variants={cardVariants}
                whileHover={{ y: -16 }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <div className="absolute top-3 right-3 z-20 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                  <div className="border bg-primary dark:bg-secondaryBackground text-white text-lg font-bold w-10 h-10 flex items-center justify-center rounded-md">
                    <FiArrowUpRight size={20} className="text-white" />
                  </div>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-full flex flex-col justify-between gap-5 border bg-primary dark:bg-secondaryBackground rounded-xl p-5 relative z-20">
                  <h1 className="text-white text-base font-semibold">
                    {item.title}
                  </h1>
                  <p className="text-white dark:text-secondary text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="absolute inset-0 z-0">
                  {index === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[...Array(2)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ rotate: 0, scale: 1 }}
                          animate={{
                            rotate: i % 2 === 0 ? 360 : -360,
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.9, 0.5],
                          }}
                          transition={{
                            duration: 12 + i * 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute w-64 h-64 md:w-80 md:h-80 border-2 border-borderBrand dark:border-primary/30"
                          style={{
                            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {index === 1 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0.8, opacity: 0.4 }}
                          animate={{
                            scale: [0.8, 1.4, 0.8],
                            opacity: [0.4, 0.1, 0.4],
                          }}
                          transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                          }}
                          className="absolute w-56 h-56 md:w-72 md:h-72 border-2 border-primary/80 dark:border-primary/30 rounded-full"
                        />
                      ))}
                    </div>
                  )}

                  {index === 2 && (
                    <>
                      {[...Array(2)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ rotate: 0, scale: 1 }}
                          animate={{
                            rotate: i % 2 === 0 ? 360 : -360,
                            scale: [1, 1.15, 1],
                            opacity: [0.6, 0.9, 0.6],
                          }}
                          transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className={`absolute -top-24 -left-24 
                    w-${56 + i * 20} h-${56 + i * 20} 
                    md:w-${72 + i * 20} md:h-${72 + i * 20} 
                    border-2 border-borderBrand dark:border-primary/30 rotate-45 rounded-[20%]`}
                        />
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ rotate: 0, scale: 1 }}
                          animate={{
                            rotate: i % 2 === 0 ? 360 : -360,
                            scale: [1, 1.15, 1],
                            opacity: [0.6, 0.9, 0.6],
                          }}
                          transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className={`absolute -bottom-24 -right-24 
                    w-${56 + i * 20} h-${56 + i * 20} 
                    md:w-${72 + i * 20} md:h-${72 + i * 20} 
                    border-2 border-borderBrand dark:border-primary/30 rotate-45 rounded-[20%]`}
                        />
                      ))}
                    </>
                  )}
                </div>

                <div className="absolute inset-0 transition duration-500 group-hover:backdrop-blur-sm z-10"></div>
              </motion.div>
            ))}
          </motion.div>
        </Link>

        {/* Mobile */}
        <Link href="/login">
          <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:hidden">
            {data.map((item, index) => (
              <motion.div
                key={index}
                className="group relative w-full sm:max-w-[350px] h-[320px] border border-borderBrand/50 dark:border-border bg-input/40 dark:bg-background rounded-2xl p-5 flex flex-col justify-end cursor-pointer overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ y: -16 }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <div className="absolute top-3 right-3 z-20 transition-opacity duration-500 opacity-100">
                  <div className="border bg-primary dark:bg-secondaryBackground text-white text-lg font-bold w-10 h-10 flex items-center justify-center rounded-md">
                    <FiArrowUpRight size={20} className="text-white" />
                  </div>
                </div>

                <div className="opacity-100 transition-opacity duration-500 w-full flex flex-col justify-between gap-5 border bg-primary dark:bg-secondaryBackground rounded-xl p-5 relative z-20">
                  <h1 className="text-white text-base font-semibold">
                    {item.title}
                  </h1>
                  <p className="text-white dark:text-secondary text-sm">
                    {item.description}
                  </p>
                </div>

                <div className="absolute inset-0 z-0">
                  {index === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[...Array(2)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ rotate: 0, scale: 1 }}
                          animate={{
                            rotate: i % 2 === 0 ? 360 : -360,
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.9, 0.5],
                          }}
                          transition={{
                            duration: 12 + i * 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute w-64 h-64 md:w-80 md:h-80 border-2 border-borderBrand dark:border-primary/30"
                          style={{
                            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {index === 1 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0.8, opacity: 0.4 }}
                          animate={{
                            scale: [0.8, 1.4, 0.8],
                            opacity: [0.4, 0.1, 0.4],
                          }}
                          transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                          }}
                          className="absolute w-56 h-56 md:w-72 md:h-72 border-2 border-primary/80 dark:border-primary/30 rounded-full"
                        />
                      ))}
                    </div>
                  )}

                  {index === 2 && (
                    <>
                      {[...Array(2)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ rotate: 0, scale: 1 }}
                          animate={{
                            rotate: i % 2 === 0 ? 360 : -360,
                            scale: [1, 1.15, 1],
                            opacity: [0.6, 0.9, 0.6],
                          }}
                          transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className={`absolute -top-24 -left-24 
                    w-${56 + i * 20} h-${56 + i * 20} 
                    md:w-${72 + i * 20} md:h-${72 + i * 20} 
                    border-2 border-borderBrand dark:border-primary/30 rotate-45 rounded-[20%]`}
                        />
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ rotate: 0, scale: 1 }}
                          animate={{
                            rotate: i % 2 === 0 ? 360 : -360,
                            scale: [1, 1.15, 1],
                            opacity: [0.6, 0.9, 0.6],
                          }}
                          transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className={`absolute -bottom-24 -right-24 
                    w-${56 + i * 20} h-${56 + i * 20} 
                    md:w-${72 + i * 20} md:h-${72 + i * 20} 
                    border-2 border-borderBrand dark:border-primary/30 rotate-45 rounded-[20%]`}
                        />
                      ))}
                    </>
                  )}
                </div>

                <div className="absolute inset-0 transition duration-500 z-10"></div>
              </motion.div>
            ))}
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Features;
