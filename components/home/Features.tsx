"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const Features = () => {
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
        <div className="hidden lg:grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-4">
          {/* Card 1 */}
          <div className="md:h-85 h-32 md:rounded-3xl rounded-2xl md:p-2 p-1 border">
            <div className="h-full md:rounded-2xl rounded-lg border bg-secondaryBackground flex flex-col">
              <div className="flex flex-col items-center text-center gap-4 p-5">
                <h1 className="text-xl font-semibold">Free and Open Source</h1>
                <p className="text-secondary text-sm">
                  SupaPOS is completely free and open-source under AGPLv3,
                  giving you full control and flexibility.
                </p>
              </div>

              <div className="flex-1 flex flex-col gap-4 mt-4 pb-4">
                <div className="w-full flex justify-end">
                  <motion.div
                    className="w-5/6 h-10 rounded-l-full bg-gradient-to-r from-primary/50 to-primary/5"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ transformOrigin: "right" }}
                  />
                </div>

                <div className="w-full flex justify-start overflow-hidden">
                  <motion.div
                    className="w-5/6 h-10 rounded-r-full bg-gradient-to-l from-primary/50 to-primary/5"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>

                <div className="w-full flex justify-end">
                  <motion.div
                    className="w-5/6 h-10 rounded-l-full bg-gradient-to-r from-primary/50 to-primary/5"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ transformOrigin: "right" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:h-85 h-32 md:rounded-3xl rounded-2xl md:p-2 p-1 border overflow-hidden">
            <div className="h-full md:rounded-2xl rounded-lg border bg-secondaryBackground flex flex-col relative overflow-hidden">
              <div className="flex flex-col justify-between items-center text-center gap-4 p-5 z-20 relative">
                <h1 className="text-xl font-semibold">Easy to Use</h1>
                <p className="text-secondary text-sm">
                  A clean, intuitive interface that allows you to start selling
                  instantly without training.
                </p>
              </div>
              <div className="relative flex-1 mt-4 w-full h-full">
                <motion.div
                  className="absolute top-8 left-5 right-5 h-[150px] rounded-t-2xl z-10 bg-gradient-to-b from-primary via-[#377C76] to-primary/5"
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                />

                <motion.div
                  className="absolute top-0 left-12 right-12 h-[150px] rounded-2xl z-0 bg-gradient-to-b from-primary/50 via-primary/10 to-transparent"
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="row-span-2 lg:h-175 md:h-85 h-32 md:rounded-3xl rounded-2xl md:p-2 p-1 border">
            <div className="h-full md:rounded-2xl rounded-lg border bg-secondaryBackground p-5">
              <div className="flex flex-col justify-between items-center text-center gap-4">
                <h1 className="text-xl font-semibold">Inventory Management</h1>
                <p className="text-secondary text-sm">
                  Track stock levels in real-time, reduce wastage, and know
                  exactly when to restock.
                </p>
              </div>

              <div className="flex-1 flex flex-col gap-4 mt-4 py-4"></div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="lg:col-span-2 md:h-85 h-32 md:rounded-3xl rounded-2xl md:p-2 p-1 border">
            <div className="h-full md:rounded-2xl rounded-lg border bg-secondaryBackground p-5">
              <div className="flex flex-col justify-between items-center text-center gap-4">
                <h1 className="text-xl font-semibold">Reports & Analytics</h1>
                <p className="text-secondary text-sm">
                  Gain insights into sales, revenue, and customer behavior to
                  make smarter business decisions.
                </p>
              </div>

              <div className="flex-1 flex flex-col gap-4 mt-4 py-4"></div>
            </div>
          </div>
        </div>

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
