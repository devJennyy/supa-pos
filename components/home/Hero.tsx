import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center py-24 md:px-16 sm:px-10 px-8 md:gap-10 gap-8">
      <div className="flex flex-col items-center gap-5">
        <div className="flex justify-center items-center gap-3 p-1 w-fit h-fit text-sm border rounded-full">
          <div className="bg-primary py-1 px-3 rounded-full">New</div>
          <p className="pr-2">Efforless transaction for your business</p>
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
      </div>
      <div className="w-full xl:max-w-[1200px] xl:h-[620px] lg:h-[520px] md:h-[375px] h-[370px] rounded-3xl bg-secondaryFill border !mt-5 transition-slow p-3">
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
