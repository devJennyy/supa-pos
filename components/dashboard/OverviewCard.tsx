"use client";

import { FaCoins } from "react-icons/fa";
import React from "react";
import { format } from "date-fns";
import { TrendingDown, TrendingUp } from "lucide-react";
import { BsCashStack } from "react-icons/bs";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { FiTrendingUp } from "react-icons/fi";
import SectionTitle from "@/components/ui/section-title";

const OverviewCard = () => {
  const stats = [
    {
      title: "Starting Change",
      value: "5,000",
      change: "4 Bills + 1000 coins",
      changeLabel: "Prepared change",
      icon: <FaCoins className="xl:text-[22px] text-sm text-primary" />,
      type: "info",
    },
    {
      title: "Sales In Cash",
      value: "5,000",
      change: "1.5%",
      changeLabel: "Down from yesterday",
      icon: <BsCashStack className="xl:text-[22px] text-sm text-primary" />,
      type: "down",
    },
    {
      title: "Sales in Banks",
      value: "5,000",
      change: "8.5%",
      changeLabel: "Up from yesterday",
      icon: (
        <BsFillCreditCard2BackFill className="xl:text-[22px] text-sm text-primary" />
      ),
      type: "up",
    },
    {
      title: "Profit",
      value: "5,000",
      change: "8.5%",
      changeLabel: "Up from yesterday",
      icon: <FiTrendingUp className="xl:text-2xl text-sm text-primary" />,
      type: "up",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4">
      <SectionTitle
        title="Today's Overview"
        label={format(new Date(), "EEEE, dd, MMMM yyyy")}
      />

      {/* <div className="grid auto-rows-min gap-4 lg:grid-cols-4 grid-cols-2">
        <div className="relative bg-secondaryBackground border rounded-xl flex flex-col justify-between xl:p-5 p-3">
          <p className="xl:text-sm text-xs font-medium text-foreground">
            Starting Change
          </p>
          <p className="xl:text-3xl text-2xl font-bold 2xl:my-8 my-4">5,000</p>
          <p className="xl:text-sm text-xs font-medium text-secondary flex xl:flex-row flex-col lg:gap-2 gap-1">
            <span className="flex gap-2 text-secondary h-4 xl:hidden">
              <FaCoins className="xl:text-[22px] text-sm text-secondary sm:block hidden" />4
              Bills + 1000 coins
            </span>
            Prepared change
          </p>
          <div className="absolute xl:top-5 xl:right-5 top-2.5 right-2.5 xl:w-12 xl:h-12 w-7 h-7 rounded-md bg-input flex justify-center items-center">
            <FaCoins className="xl:text-[22px] text-sm text-primary" />
          </div>
        </div>

        <div className="relative bg-secondaryBackground border rounded-xl flex flex-col justify-between xl:p-5 p-3">
          <p className="xl:text-sm text-xs font-medium text-foreground">
            Sales In Cash
          </p>
          <p className="xl:text-3xl text-2xl font-bold 2xl:my-8 my-4">5,000</p>
          <p className="whitespace-nowrap xl:text-sm text-xs font-medium text-secondary flex xl:flex-row flex-col lg:gap-2 gap-1">
            <span className="flex gap-2 text-destructive">
              <TrendingDown className="h-4 w-4" />
              1.5%
            </span>
            Down from yesterday
          </p>
          <div className="absolute xl:top-5 xl:right-5 top-2.5 right-2.5 xl:w-12 xl:h-12 w-7 h-7 rounded-md bg-input flex justify-center items-center">
            <BsCashStack className="xl:text-[22px] text-sm text-primary" />
          </div>
        </div>

        <div className="relative bg-secondaryBackground border rounded-xl flex flex-col justify-between xl:p-5 p-3">
          <p className="xl:text-sm text-xs font-medium text-foreground">
            Sales in Banks
          </p>
          <p className="xl:text-3xl text-2xl font-bold xl:my-8 my-4">5,000</p>
          <p className="xl:text-sm text-xs font-medium text-secondary flex xl:flex-row flex-col lg:gap-2 gap-1">
            <span className="flex gap-2 text-primary">
              <TrendingUp className="h-4 w-4" />
              8.5%
            </span>
            Up from yesterday
          </p>
          <div className="absolute xl:top-5 xl:right-5 top-2.5 right-2.5 xl:w-12 xl:h-12 w-7 h-7 rounded-md bg-input flex justify-center items-center">
            <BsFillCreditCard2BackFill className="xl:text-[22px] text-sm text-primary" />
          </div>
        </div>

        <div className="relative bg-secondaryBackground border rounded-xl flex flex-col justify-between xl:p-5 p-3">
          <p className="xl:text-sm text-xs font-medium text-foreground">
            Profit
          </p>
          <p className="xl:text-3xl text-2xl font-bold xl:my-8 my-4">5,000</p>
          <p className="xl:text-sm text-xs font-medium text-secondary flex xl:flex-row flex-col lg:gap-2 gap-1">
            <span className="flex gap-2 text-primary">
              <TrendingUp className="h-4 w-4" />
              8.5%
            </span>
            Up from yesterday
          </p>
          <div className="absolute xl:top-5 xl:right-5 top-2.5 right-2.5 xl:w-12 xl:h-12 w-7 h-7 rounded-md bg-input flex justify-center items-center">
            <FiTrendingUp className="xl:text-2xl text-sm text-primary" />
          </div>
        </div>
      </div> */}

      <div className="grid auto-rows-min gap-4 lg:grid-cols-4 grid-cols-2">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative bg-input/30 dark:bg-secondaryBackground border border-borderBrand/50 dark:border-border rounded-xl flex flex-col justify-between xl:p-5 p-3"
          >
            <p className="xl:text-sm text-xs font-medium text-foreground">
              {item.title}
            </p>
            <p className="xl:text-3xl text-2xl font-bold 2xl:my-12 xl:my-8 my-4">
              {item.value}
            </p>

            <p className="xl:text-sm text-xs font-medium text-secondary flex xl:flex-row flex-col lg:gap-2 gap-1 whitespace-nowrap">
              {item.type !== "info" && (
                <span
                  className={`flex gap-2 ${
                    item.type === "up" ? "text-primary" : "text-destructive"
                  }`}
                >
                  {item.type === "up" && <TrendingUp className="h-4 w-4" />}
                  {item.type === "down" && <TrendingDown className="h-4 w-4" />}
                  {item.change}
                </span>
              )}
              {item.type === "info" && (
                <span className="flex gap-2 text-secondary h-4 xl:hidden">
                  <FaCoins className="xl:text-[22px] text-sm text-secondary sm:block hidden" />
                  {item.change}
                </span>
              )}
              {item.changeLabel}
            </p>

            <div className="absolute xl:top-5 xl:right-5 top-2.5 right-2.5 xl:w-12 xl:h-12 w-7 h-7 rounded-md bg-primary/5 dark:bg-input flex justify-center items-center">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCard;
