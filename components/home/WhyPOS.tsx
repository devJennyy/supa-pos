"use client";

import React from "react";
import { motion } from "framer-motion";

const WhyPOS = () => {
  return (
    <section
      id="why-pos"
      className="scroll-mt-20 w-full border-t mt-[-1px] lg:py-16 py-10"
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
              Why SupaPOS?
            </div>
            <p className="pr-2">All-in-one POS solution</p>
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
            The <span className="text-primary pr-1">smartest way</span>
            <br className="sm:block hidden" />
            to run your business
          </motion.h1>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-4">
          {/* Card 1 */}
          <div className="xl:h-85 lg:h-75 h-32 md:rounded-3xl rounded-2xl p-2 border border-borderBrand dark:border-border overflow-hidden">
            <motion.div
              className="group h-full md:rounded-2xl rounded-lg border border-borderBrand dark:border-border 
             bg-white dark:bg-secondaryBackground flex flex-col justify-between overflow-hidden
             hover:bg-[#F6FBFB] dark:hover:bg-[#1F2733]"
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="flex flex-col items-center text-center gap-3 p-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.2,
                }}
              >
                <h1 className="xl:text-xl text-lg font-semibold">
                  Free and Open Source
                </h1>
                <p className="text-secondary text-sm">
                  SupaPOS is completely free and open-source under AGPLv3,
                  giving you full control and flexibility.
                </p>
              </motion.div>

              <div className="flex-1 flex flex-col xl:gap-4 gap-3 mt-2 pb-4">
                <div className="w-full flex justify-end">
                  <motion.div
                    className="w-5/6 xl:h-10 h-7 rounded-l-full bg-gradient-to-r dark:from-input dark:to-input/5 from-primary/25 to-primary/5"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ transformOrigin: "right" }}
                  />
                </div>

                <div className="w-full flex justify-start overflow-hidden">
                  <motion.div
                    className="w-5/6 xl:h-10 h-7 rounded-r-full bg-gradient-to-l dark:from-input dark:to-input/5 from-primary/25 to-primary/5"
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
                    className="w-5/6 xl:h-10 h-7 rounded-l-full bg-gradient-to-r dark:from-input dark:to-input/5 from-primary/25 to-primary/5"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ transformOrigin: "right" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 2 */}
          <div className="xl:h-85 lg:h-75 h-32 md:rounded-3xl rounded-2xl p-2 border border-borderBrand dark:border-border overflow-hidden">
            <motion.div
              className="group h-full md:rounded-2xl rounded-lg border border-borderBrand dark:border-border 
             bg-white dark:bg-secondaryBackground flex flex-col relative overflow-hidden
             hover:bg-[#F6FBFB] dark:hover:bg-[#1F2733]"
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="flex flex-col justify-between items-center text-center gap-3 p-7 z-20 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.2,
                }}
              >
                <h1 className="xl:text-xl text-lg font-semibold">
                  Easy to Use
                </h1>
                <p className="text-secondary text-sm">
                  A clean, intuitive interface that allows you to start selling
                  instantly without training.
                </p>
              </motion.div>
              <div className="relative flex-1 mt-2 w-full h-full">
                <motion.div
                  className="absolute top-8 left-5 right-5 h-[150px] rounded-t-2xl z-10 bg-gradient-to-b dark:from-input dark:via-input/80 dark:to-input/5 from-[#CCEBE8] to-primary/5"
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                />

                <motion.div
                  className="absolute top-0 left-12 right-12 h-[150px] rounded-2xl z-0 bg-gradient-to-b dark:from-input/50 dark:via-input/10 from-primary/25 via-primary/5 to-transparent"
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Card 3 */}
          <div className="row-span-2 xl:h-175 lg:h-155 md:h-85 h-32 md:rounded-3xl rounded-2xl p-2 border border-borderBrand dark:border-border overflow-hidden">
            <motion.div
              className="group h-full md:rounded-2xl rounded-lg border border-borderBrand dark:border-border 
             bg-white dark:bg-secondaryBackground flex flex-col justify-between overflow-hidden
             hover:bg-[#F6FBFB] dark:hover:bg-[#1F2733]"
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="flex flex-col gap-4 xl:!mt-2 p-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                {/* Phone */}
                <motion.div
                  className="flex items-center gap-4 p-4 bg-gradient-to-r dark:from-input/50 dark:to-input/10 from-input to-input/0 rounded-xl 
                   group-hover:from-white group-hover:to-transparent transition-colors duration-300"
                  variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
                    },
                  }}
                >
                  <div className="w-full max-w-11 h-16 bg-primary/40 dark:bg-border rounded-lg relative hidden xl:flex items-center justify-center px-1.5">
                    <div className="w-full h-11 bg-background dark:bg-secondary rounded-sm !mb-2"></div>
                    <div className="w-1.5 h-1.5 bg-background dark:bg-secondary rounded-full absolute bottom-1"></div>
                  </div>
                  <div className="flex flex-col xl:gap-0 gap-2">
                    <h3 className="font-semibold xl:text-lg text-sm text-foreground">
                      Phone
                    </h3>
                    <p className="text-secondary xl:text-sm text-xs">
                      Manage orders and sales easily on your mobile device.
                    </p>
                  </div>
                </motion.div>

                {/* Tablet */}
                <motion.div
                  className="flex items-center gap-4 p-4 bg-gradient-to-r dark:from-input/50 dark:to-input/10 from-input to-input/0 rounded-xl 
                   group-hover:from-white group-hover:to-transparent transition-colors duration-300"
                  variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
                    },
                  }}
                >
                  <div className="w-full max-w-20 h-16 bg-primary/40 dark:bg-border rounded-lg relative hidden xl:flex items-center justify-center px-1.5">
                    <div className="w-full h-10 bg-background dark:bg-secondary rounded-sm !mb-1"></div>
                    <div className="w-1.5 h-1.5 bg-background dark:bg-secondary rounded-full absolute bottom-1"></div>
                  </div>
                  <div className="flex flex-col xl:gap-0 gap-2">
                    <h3 className="font-semibold xl:text-lg text-sm text-foreground">
                      Tablet
                    </h3>
                    <p className="text-secondary xl:text-sm text-xs">
                      Tablet-optimized for a larger touch screen and easy
                      navigation.
                    </p>
                  </div>
                </motion.div>

                {/* Web */}
                <motion.div
                  className="flex items-center gap-4 p-4 bg-gradient-to-r dark:from-input/50 dark:to-input/10 from-input to-input/0 rounded-xl 
                   group-hover:from-white group-hover:to-transparent transition-colors duration-300"
                  variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
                    },
                  }}
                >
                  <div className="w-full max-w-20 h-16 bg-primary/40 dark:bg-border rounded-lg relative hidden xl:flex flex-col justify-center items-center px-1.5">
                    <div className="w-full h-12 bg-background dark:bg-secondary rounded-sm"></div>
                    <div className="absolute bottom-0 w-10 h-1 bg-[#A7DCD7] dark:bg-secondary rounded-sm"></div>
                    <div className="absolute bottom-[-4px] w-6 h-2 bg-[#A7DCD7] dark:bg-secondary rounded-sm"></div>
                  </div>
                  <div className="flex flex-col xl:gap-0 gap-2">
                    <h3 className="font-semibold xl:text-lg text-sm text-foreground">
                      Web
                    </h3>
                    <p className="text-secondary xl:text-sm text-xs">
                      Full desktop layout to manage your business dashboard
                      efficiently.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex-none flex flex-col justify-start items-start text-left gap-2 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.3,
                }}
              >
                <h1 className="xl:text-xl text-lg font-semibold">
                  Responsive Design
                </h1>
                <p className="text-secondary text-sm">
                  Access your business dashboard seamlessly on desktop, tablet,
                  or mobile devices.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Card 4 */}
          <motion.div className="lg:col-span-2 xl:h-85 lg:h-75 h-32 md:rounded-3xl rounded-2xl p-2 border border-borderBrand dark:border-border overflow-hidden">
            <motion.div
              className="flex h-full md:rounded-2xl rounded-lg border border-borderBrand dark:border-border 
             bg-white dark:bg-secondaryBackground overflow-hidden
             hover:bg-[#F6FBFB] dark:hover:bg-[#1F2733] transition-colors duration-300"
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="w-2/6 h-full flex flex-col justify-end items-start text-left gap-4 pl-10 pb-8 z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 1,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.2,
                }}
              >
                <h1 className="xl:text-xl text-lg font-semibold">
                  Modern & Innovative
                </h1>
                <p className="text-secondary text-sm">
                  Built with the latest technology and a sleek, up-to-date
                  interface for a smooth experience.
                </p>
              </motion.div>

              <motion.div
                className="flex-1 h-full flex justify-end items-end"
                initial={{ x: "50%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.3,
                }}
              >
                <div className="w-5/6 h-5/6 bg-gradient-to-br dark:from-input dark:to-input/5 from-primary/25 to-primary/5 rounded-tl-2xl" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile */}
        <motion.div className="lg:hidden grid sm:w-[350px] grid-cols-1 md:gap-5 gap-4">
          {/* Card 1 */}
          <motion.div
            className="h-[320px] md:rounded-3xl rounded-2xl p-2 border border-borderBrand dark:border-border"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full md:rounded-2xl rounded-lg border border-borderBrand dark:border-border bg-input/30 dark:bg-secondaryBackground flex flex-col">
              <motion.div
                className="flex flex-col items-center text-center gap-4 p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.2,
                }}
              >
                <h1 className="xl:text-xl text-lg font-semibold">
                  Free and Open Source
                </h1>
                <p className="text-secondary text-sm">
                  SupaPOS is completely free and open-source under AGPLv3,
                  giving you full control and flexibility.
                </p>
              </motion.div>
              <div className="flex-1 flex flex-col gap-4 mt-4 pb-4">
                <div className="w-full flex justify-end">
                  <motion.div
                    className="w-5/6 xl:h-10 h-7 rounded-l-full bg-gradient-to-r dark:from-input dark:to-input/5 from-primary/40 to-primary/5"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ transformOrigin: "right" }}
                  />
                </div>
                <div className="w-full flex justify-start overflow-hidden">
                  <motion.div
                    className="w-5/6 xl:h-10 h-7 rounded-r-full bg-gradient-to-l dark:from-input dark:to-input/5 from-primary/40 to-primary/5"
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
                    className="w-5/6 xl:h-10 h-7 rounded-l-full bg-gradient-to-r dark:from-input dark:to-input/5 from-primary/40 to-primary/5"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ transformOrigin: "right" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="h-[320px] md:rounded-3xl rounded-2xl p-2 border border-borderBrand dark:border-border"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="h-full md:rounded-2xl rounded-lg border border-borderBrand dark:border-border bg-input/30 dark:bg-secondaryBackground flex flex-col relative overflow-hidden">
              <motion.div
                className="flex flex-col justify-between items-center text-center gap-4 p-5 z-20 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.2,
                }}
              >
                <h1 className="xl:text-xl text-lg font-semibold">
                  Easy to Use
                </h1>
                <p className="text-secondary text-sm">
                  A clean, intuitive interface that allows you to start selling
                  instantly without training.
                </p>
              </motion.div>
              <div className="relative flex-1 mt-4 w-full h-full">
                <motion.div
                  className="absolute top-8 left-5 right-5 h-[150px] rounded-t-2xl z-10 bg-gradient-to-b dark:from-input dark:via-input/80 dark:to-input/5 from-[#9ADAD4] via-[#ADE0DC] to-primary/5"
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                />
                <motion.div
                  className="absolute top-0 left-12 right-12 h-[150px] rounded-2xl z-0 bg-gradient-to-b dark:from-input/50 dark:via-input/10 from-primary/30 via-primary/5 to-transparent"
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="row-span-2 h-[320px] md:rounded-3xl rounded-2xl p-2 border border-borderBrand dark:border-border"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-full md:rounded-2xl rounded-lg border border-borderBrand dark:border-border bg-input/30 dark:bg-secondaryBackground flex lg:flex-col flex-col-reverse lg:justify-between overflow-hidden">
              <motion.div
                className="flex flex-col gap-4 xl:!mt-2 pl-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                {/* Phone */}
                <motion.div
                  className="flex items-center gap-4 p-4 bg-gradient-to-r dark:from-input/50 dark:to-input/10 from-white to-white/30 rounded-tl-xl rounded-bl-xl"
                  variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
                    },
                  }}
                >
                  <div className="w-full max-w-11 h-16 bg-primary/40 dark:bg-border rounded-lg relative hidden xl:flex items-center justify-center px-1.5">
                    <div className="w-full h-11 bg-background dark:bg-secondary rounded-sm !mb-2"></div>
                    <div className="w-1.5 h-1.5 bg-background dark:bg-secondary rounded-full absolute bottom-1"></div>
                  </div>
                  <div className="flex flex-col xl:gap-0 gap-2">
                    <h3 className="font-semibold xl:text-lg text-sm text-primary dark:text-foreground">
                      Phone
                    </h3>
                    <p className="text-secondary xl:text-sm text-xs">
                      Manage orders and sales easily on your mobile device.
                    </p>
                  </div>
                </motion.div>

                {/* Tablet */}
                <motion.div
                  className="flex items-center gap-4 p-4 bg-gradient-to-r dark:from-input/50 dark:to-input/10 from-white to-white/30 rounded-tl-xl"
                  variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
                    },
                  }}
                >
                  <div className="w-full max-w-20 h-16 bg-primary/40 dark:bg-border rounded-lg relative hidden xl:flex items-center justify-center px-1.5">
                    <div className="w-full h-10 bg-[#A7DCD7] dark:bg-secondary rounded-sm !mb-1"></div>
                    <div className="w-1.5 h-1.5 bg-[#A7DCD7] dark:bg-secondary rounded-full absolute bottom-1"></div>
                  </div>
                  <div className="flex flex-col xl:gap-0 gap-2">
                    <h3 className="font-semibold xl:text-lg text-sm text-primary dark:text-foreground">
                      Tablet
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex-none flex flex-col justify-start items-start text-left gap-2 p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.3,
                }}
              >
                <h1 className="xl:text-xl text-lg font-semibold">
                  Responsive Design
                </h1>
                <p className="text-secondary text-sm">
                  Access your business dashboard seamlessly on desktop, tablet,
                  or mobile devices.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="lg:col-span-2 h-[320px] md:rounded-3xl rounded-2xl p-2 border border-borderBrand dark:border-border"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col h-full md:rounded-2xl rounded-lg border border-borderBrand dark:border-border bg-input/30 dark:bg-secondaryBackground overflow-hidden">
              <motion.div
                className="lg:w-2/6 h-full flex flex-col lg:justify-end lg:items-start items-center lg:text-left text-center gap-4 p-5 z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 1,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.2,
                }}
              >
                <h1 className="xl:text-xl text-lg font-semibold">
                  Modern & Innovative
                </h1>
                <p className="text-secondary text-sm">
                  Built with the latest technology and a sleek, up-to-date
                  interface for a smooth experience.
                </p>
              </motion.div>
              <motion.div
                className="flex-1 h-full flex justify-end items-end lg:!mt-0 !mt-5"
                initial={{ x: "50%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.3,
                }}
              >
                <div className="lg:w-5/6 lg:h-5/6 w-48 h-53 bg-gradient-to-br dark:from-input dark:to-input/5 from-primary/40 to-primary/5 rounded-tl-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyPOS;
