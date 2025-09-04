import { GoArrowUpRight } from "react-icons/go";
import { FaGithub, FaGlobe, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const socialButtons = [
    {
      url: "https://www.linkedin.com/in/jennypieloor/",
      id: "linkedin",
      icon: FaLinkedinIn,
      size: 16,
      smSize: 12,
      className: "lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6",
    },
    {
      url: "https://devjenny-portfolio-legacy.vercel.app/",
      id: "globe",
      icon: FaGlobe,
      size: 14,
      smSize: 12,
      className: "lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6",
    },
    {
      url: "https://github.com/devJennyy",
      id: "github",
      icon: FaGithub,
      size: 16,
      smSize: 12,
      className: "lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6",
    },
    {
      url: "mailto:devjenny.official@gmail.com?subject=Job%20opportunity%20at%20Company%20Name",
      id: "gmail",
      icon: MdEmail,
      size: 17,
      smSize: 14,
      className: "lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6",
    },
  ];
  return (
    <footer className="w-full border-y">
      <div className="w-full max-w-[1280px] !mx-auto flex justify-center items-center 4xl:py-7 py-4 sm:px-5 px-4 ">
        {/* This code svcks, but I kinda like the output so... NO JUDGING PLS! */}
        <div className="flex md:flex-row flex-col justify-between items-center w-full text-secondary text-xs lg:text-sm 4xl:text-lg font-light md:gap-0 gap-5">
          <p className="md:hidden lg:!mt-4 !mt-1 font-medium text-center">
            Designed & Developed by Jenny Pieloor
            <br className="text-neonAqua md:!ml-1" />© 2025. All rights
            reserved.
          </p>
          <div className="flex justify-between items-center w-full font-medium">
            <button className="hover:text-foreground flex justify-start items-center 2xl:w-[164px] lg:w-[152px] md:w-[136px] gap-[3px] hover:gap-[6px] transition-default">
              <a href="https://supapos.vercel.app/" target="_blank">
                Visit repository
              </a>
              <GoArrowUpRight className="4xl:!mt-[5px] !mt-[3px] 4xl:text-2xl xl:text-lg text-base" />
            </button>
            <p className="md:block hidden font-medium">
              Designed & Developed by Jenny Pieloor
              <span className="text-neonAqua !ml-1">
                © 2025. All rights reserved.
              </span>
            </p>

            <div className="flex 3xl:gap-3 sm:gap-2 gap-1">
              {socialButtons?.map(
                ({ url, id, icon: Icon, size, smSize, className }) => (
                  <a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex justify-center items-center rounded-full border hover:bg-input hover:border-borderBrand dark:border-border hover:text-primary transition-default ${className}`}
                  >
                    <Icon size={size} className="lg:block hidden" />
                    <Icon size={smSize} className="lg:hidden" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
