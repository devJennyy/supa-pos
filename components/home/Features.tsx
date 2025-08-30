"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const Features = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="w-full border-t mt-[-1px] lg:py-16 py-10">
      <div className="w-full max-w-[1440px] !mx-auto flex flex-col justify-center items-center lg:px-16 sm:px-10 px-5 lg:gap-14 gap-8">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex justify-center items-center gap-3 p-1 w-fit h-fit lg:text-sm text-xs border rounded-full">
            <div className="bg-primary py-1 px-3 rounded-full">Features</div>
            <p className="pr-2">Everything you need in one place.</p>
          </div>
          <h1 className="capitalize lg:text-[2.5rem] text-2xl font-semibold leading-normal text-center px-5">
            The <span className="text-primary pr-1">smartest way</span>
            <br className="sm:block hidden" />
            to run your business
          </h1>
        </div>

        {/* Desktop */}
        <motion.div
          className="hidden lg:grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Card 1 */}
          <motion.div
            className="md:h-85 h-32 md:rounded-3xl rounded-2xl md:p-2 p-1 border"
            variants={cardVariants}
          >
            <div className="h-full md:rounded-2xl rounded-lg border bg-secondaryBackground"></div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="md:h-85 h-32 md:rounded-3xl rounded-2xl md:p-2 p-1 border"
            variants={cardVariants}
          >
            <div className="h-full md:rounded-2xl rounded-lg border bg-secondaryBackground"></div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="row-span-2 lg:h-175 md:h-85 h-32 md:rounded-3xl rounded-2xl md:p-2 p-1 border"
            variants={cardVariants}
          >
            <div className="h-full md:rounded-2xl rounded-lg border bg-secondaryBackground"></div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="lg:col-span-2 md:h-85 h-32 md:rounded-3xl rounded-2xl md:p-2 p-1 border"
            variants={cardVariants}
          >
            <div className="h-full md:rounded-2xl rounded-lg border bg-secondaryBackground"></div>
          </motion.div>
        </motion.div>

        {/* Mobile */}
        <div className="grid lg:hidden w-full grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 */}
          <motion.div
            className="md:h-85 h-32 md:rounded-3xl rounded-2xl md:p-2 p-1 border"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="h-full md:rounded-2xl rounded-lg border bg-secondaryBackground"></div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="md:h-85 h-32 md:rounded-3xl rounded-2xl md:p-2 p-1 border"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="h-full md:rounded-2xl rounded-lg border bg-secondaryBackground"></div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="row-span-2 lg:h-175 md:h-85 h-32 md:rounded-3xl rounded-2xl md:p-2 p-1 border"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="h-full md:rounded-2xl rounded-lg border bg-secondaryBackground"></div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="lg:col-span-2 md:h-85 h-32 md:rounded-3xl rounded-2xl md:p-2 p-1 border"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="h-full md:rounded-2xl rounded-lg border bg-secondaryBackground"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
