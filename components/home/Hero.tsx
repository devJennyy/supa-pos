"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { AuthModal } from "../ui/AuthModal";

const Hero = () => {
  const [showAuth, setShowAuth] = useState(false);
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
      id="hero"
      ref={containerRef}
      className="scroll-mt-20 w-full flex flex-col justify-center items-center xl:px-16 sm:px-10 px-5 lg:gap-10 relative transition-colors duration-500 ease-in-out"
    >
      <motion.div
        style={{ scale: textScale, opacity: textOpacity }}
        className="flex flex-col items-center gap-5 sticky top-24 lg:pt-24 pt-10 z-10"
      >
        {/* <div className="flex justify-center items-center gap-3 p-1 w-fit h-fit lg:text-sm text-xs border rounded-full">
          <div className="bg-primary py-1 px-3 rounded-full">SupaPOS</div>
          <p className="pr-2">Free, easy and fast.</p>
        </div> */}
        <div className="flex justify-center items-center gap-3 p-1 w-fit h-fit lg:text-sm text-xs bg-input/40 dark:bg-transparent border dark:border-border border-borderBrand/80 rounded-full">
          <div className="bg-primary py-1 px-3 rounded-full text-white">
            Update
          </div>
          <p className="pr-2">Currently work in progress</p>
        </div>

        <h1 className="capitalize lg:text-[3.5rem] text-3xl font-semibold leading-tight text-center">
          Your <span className="text-primary pr-1">smart partner</span>
          <br className="sm:block hidden" /> in business solutions
        </h1>

        <p className="lg:max-w-4/6 sm:max-w-4/6 text-center text-secondary lg:text-base text-sm px-5">
          Our solution offers real-time sales tracking, smart inventory
          management, detailed reporting, and a seamless experience across all
          devices
        </p>

        <div className="flex gap-3">
          <Button
            asChild
            className="!mt-2 lg:w-32 lg:h-10 w-28 h-8.5 lg:text-sm text-xs lg:hidden"
          >
            <Link href="/login">Get Started</Link>
          </Button>

          <Button
            onClick={() => setShowAuth(true)}
            className="z-50 !mt-2 lg:w-32 lg:h-10 w-28 h-8.5 lg:text-sm text-xs lg:flex hidden"
          >
            Get Started
          </Button>

          <Button
            asChild
            className="!mt-2 lg:w-32 lg:h-10 w-28 h-8.5 dark:bg-transparent border border-borderBrand bg-input dark:text-primary hover:dark:text-white lg:text-sm text-xs hover:bg-primary dark:hover:bg-primary hover:text-white text-foreground transition-default"
          >
            <Link href="/#features">Explore</Link>
          </Button>
        </div>
      </motion.div>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}

      <div className="dark:block hidden z-30 w-full overflow-hidden xl:max-w-[1350px] lg:max-w-[1200px] max-w-[540px] lg:rounded-t-3xl rounded-t-xl bg-secondaryFill border lg:!mt-10 !mt-20 transition-slow lg:px-3 lg:pt-3 px-2 pt-2 transition-colors duration-500 ease-in-out">
        <Image
          src="/images/sales-order.svg"
          alt="Image Preview"
          width={500}
          height={500}
          className="lg:rounded-t-xl rounded-t-lg w-full object-cover !mb-5"
          priority
        />
      </div>
      <div className="dark:hidden block z-30 w-full overflow-hidden xl:max-w-[1350px] lg:max-w-[1200px] max-w-[540px] lg:rounded-t-3xl rounded-t-xl bg-input border border-borderBrand lg:!mt-10 !mt-20 transition-slow lg:px-3 lg:pt-3 px-2 pt-2">
        <Image
          src="/images/sales-order-light.svg"
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
