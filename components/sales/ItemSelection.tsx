"use client";

import React from "react";
import SectionTitle from "../ui/section-title";
import { Button } from "../ui/button";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useRightSidebar } from "@/app/user/layout";

const itemDetails = [
  {
    productName: "Beng Beng Chocolate Overload Wafer Bar with Chocolate Cream Filling",
    availableStock: "24",
    numberSold: "6",
    productPrice: "12.00",
  },
  {
    productName: "Kopiko Blanca Coffee Mix",
    availableStock: "50",
    numberSold: "18",
    productPrice: "8.50",
  },
  {
    productName: "Nissin Cup Noodles Beef Flavor Instant Ramen Bowl",
    availableStock: "40",
    numberSold: "25",
    productPrice: "22",
  },
  {
    productName: "SkyFlakes Crackers",
    availableStock: "100",
    numberSold: "60",
    productPrice: "5.75",
  },
  {
    productName: "Oreo Chocolate Sandwich Cookies with Vanilla Cream Filling",
    availableStock: "35",
    numberSold: "20",
    productPrice: "15.25",
  },
  {
    productName: "C2 Green Tea",
    availableStock: "75",
    numberSold: "30",
    productPrice: "18",
  },
  {
    productName: "Piattos Cheese Flavored Potato Crisps",
    availableStock: "45",
    numberSold: "15",
    productPrice: "12.50",
  },
  {
    productName: "Nova Multigrain Snacks",
    availableStock: "38",
    numberSold: "12",
    productPrice: "14.20",
  },
  {
    productName: "Hansel Mocha Sandwich",
    availableStock: "60",
    numberSold: "22",
    productPrice: "10",
  },
  {
    productName: "Fudgee Barr Mocha Filled Snack Cake with Rich Cream",
    availableStock: "48",
    numberSold: "16",
    productPrice: "12.75",
  },
];

const ItemSelection = () => {
  const { openRight } = useRightSidebar();

  return (
    <div className="flex flex-col gap-4">
      <SectionTitle title={"Select Items"} />

      <div className="grid lg:gap-5 gap-3 lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
        {itemDetails?.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-transparent border lg:p-5 p-2.5 rounded-xl text-start hover:bg-input/40 dark:hover:bg-input/30 hover:border-borderBrand/70 dark:hover:border-border group transition-default"
          >
            <div className="w-full h-full flex flex-col lg:gap-4 gap-1.5">
              <div className="w-full lg:h-16 flex lg:flex-row flex-col lg:gap-4 gap-3">
                <div className="w-full lg:max-w-16 lg:h-full h-24 border rounded-lg group-hover:bg-input"></div>

                <div className="flex flex-col justify-between lg:gap-1 gap-1.5">
                  <p className="lg:text-sm text-[13px] line-clamp-2 text-ellipsis font-semibold">
                    {item.productName}
                  </p>
                  <div className="flex justify-between lg:text-xs text-[11px] !mb-1 text-secondary font-medium">
                    <p>{item.availableStock} Available</p>
                    <p>{item.numberSold} sold</p>
                  </div>
                </div>
              </div>

              <h1 className="font-semibold lg:text-lg lg:!my-1">
                ₱ {item.productPrice}
              </h1>

              <div className="flex flex-col lg:gap-3 gap-1.5">
                <div className="h-9 bg-secondaryBackground rounded-md flex justify-between items-center px-3 group-hover:bg-primary/5 group-hover:border border-borderBrand/30 dark:border-border">
                  <button
                    onClick={openRight}
                    className="p-1 bg-input rounded-full flex justify-center items-center group-hover:bg-primary/40 dark:group-hover:bg-primary/30 cursor-pointer"
                  >
                    <FiMinus className="lg:text-[15px] text-sm group-hover:text-white" />
                  </button>
                  <p className="font-bold lg:text-base text-sm">2</p>
                  <button
                    onClick={openRight}
                    className="p-1 bg-input rounded-full flex justify-center items-center group-hover:bg-primary cursor-pointer"
                  >
                    <FiPlus className="lg:text-[15px] text-sm group-hover:text-white" />
                  </button>
                </div>

                <Button
                  className="h-9 font-semibold lg:text-sm text-[13px]"
                  onClick={openRight}
                >
                  Add to Sale
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemSelection;
