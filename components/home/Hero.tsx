"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"],
  });

  const textScaleRaw = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const textOpacityRaw = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const textScale = useSpring(textScaleRaw, {
    stiffness: 100,
    damping: 20,
    mass: 0.3,
  });
  const textOpacity = useSpring(textOpacityRaw, {
    stiffness: 100,
    damping: 20,
    mass: 0.3,
  });

  return (
    <section
      ref={containerRef}
      className="w-full flex flex-col justify-center items-center lg:px-16 sm:px-10 px-5 lg:gap-10 relative"
    >
      <motion.div
        style={{ scale: textScale, opacity: textOpacity }}
        className="flex flex-col items-center gap-5 sticky top-24 lg:pt-24 pt-10 z-10"
      >
        <div className="flex justify-center items-center gap-3 p-1 w-fit h-fit lg:text-sm text-xs border rounded-full">
          <div className="bg-primary py-1 px-3 rounded-full">SupaPOS</div>
          <p className="pr-2">Free, easy and fast.</p>
        </div>

        <h1 className="capitalize lg:text-[3.5rem] text-3xl font-semibold leading-tight text-center">
          Your <span className="text-primary">smart partner</span>{" "}
          <br className="sm:block hidden" /> in business solutions
        </h1>

        <p className="lg:max-w-4/6 sm:max-w-4/6 text-center text-secondary lg:text-base text-sm px-5">
          Our solution offers real-time sales tracking, smart inventory
          management, detailed reporting, and a seamless experience across all
          devices
        </p>

        <div className="flex gap-3">
          <Button className="!mt-2 lg:w-32 lg:h-10 w-28 h-8.5 lg:text-sm text-xs">
            Get Started
          </Button>
          <Button className="!mt-2 lg:w-32 lg:h-10 w-28 h-8.5 bg-transparent border border-primary text-primary lg:text-sm text-xs">
            Explore
          </Button>
        </div>
      </motion.div>

      <div className="z-30 w-full overflow-hidden xl:max-w-[1200px] max-w-[540px] lg:rounded-t-3xl rounded-t-xl bg-secondaryFill border lg:!mt-10 !mt-20 transition-slow lg:px-3 lg:pt-3 px-2 pt-2">
        <Image
          src="/images/sales-order.svg"
          alt="Image Preview"
          width={500}
          height={500}
          className="lg:rounded-t-xl rounded-t-lg w-full object-cover !mb-5" 
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
