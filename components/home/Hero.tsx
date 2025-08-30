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
      className="w-full flex flex-col justify-center items-center md:px-16 sm:px-10 px-8 md:gap-10 gap-8 relative"
    >
      <motion.div
        style={{ scale: textScale, opacity: textOpacity }}
        className="flex flex-col items-center gap-5 sticky top-24 pt-24 z-10"
      >
        <div className="flex justify-center items-center gap-3 p-1 w-fit h-fit text-sm border rounded-full">
          <div className="bg-primary py-1 px-3 rounded-full">New</div>
          <p className="pr-2">Effortless transaction for your business</p>
        </div>

        <h1 className="capitalize text-[3.5rem] font-semibold leading-tight text-center">
          Your <span className="text-primary">smart partner</span> <br /> in
          business solutions
        </h1>

        <p className="max-w-1/2 text-center text-secondary">
          Our solution offers real-time sales tracking, smart inventory
          management, detailed reporting, and a seamless experience across all
          devices
        </p>

        <div className="flex gap-3">
          <Button className="!mt-2 w-32 h-10">Get Started</Button>
          <Button className="!mt-2 w-32 h-10 bg-transparent border border-primary text-primary">
            Explore
          </Button>
        </div>
      </motion.div>

      <div className="z-30 w-full overflow-hidden xl:max-w-[1200px] rounded-t-3xl bg-secondaryFill border !mt-10 transition-slow px-3 pt-3">
        <Image
          src="/images/sales-order.svg"
          alt="Image Preview"
          width={500}
          height={500}
          className="rounded-xl w-full object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
