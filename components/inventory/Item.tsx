"use client";

import React from "react";
import SectionTitle from "../ui/section-title";
import { Button } from "../ui/button";
import { FiPlus } from "react-icons/fi";

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

const Item = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <SectionTitle title="Snacks" />

        <Button className="w-fit dark:bg-input border lg:text-sm text-xs font-medium dark:text-primary hover:text-foreground">
          <FiPlus />
          <p>Add New Item</p>
        </Button>
      </div>

      <div className="grid lg:gap-5 gap-3 lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
        {itemDetails?.map((item, index) => (
          <div
            key={index}
            className="border lg:p-5 p-2.5 rounded-xl cursor-pointer text-start hover:bg-secondaryBackground group transition-default"
          >
            <div className="w-full flex flex-col justify-between h-full lg:gap-4 gap-1.5">
              <div className="w-full flex flex-col justify-between gap-3">
                <div className="w-full lg:h-32 h-24 border rounded-lg group-hover:bg-input"></div>
                <p className="font-semibold lg:text-base text-sm line-clamp-2 text-ellipsis">
                  {item.productName}
                </p>
              </div>

              <div className="grid grid-cols-2 lg:gap-3 gap-2 lg:text-sm text-[13px] !mt-2">
                <div className="flex flex-col lg:gap-0.5">
                  <p className="text-secondary">Stock</p>
                  <p className="font-semibold">{item.availableStock}</p>
                </div>
                <div className="flex flex-col lg:gap-0.5">
                  <p className="text-secondary">Price</p>
                  <p className="font-semibold">₱ {item.productPrice}</p>
                </div>
                <div className="flex flex-col lg:gap-0.5">
                  <p className="text-secondary">Sold</p>
                  <p className="font-semibold">₱ {item.numberSold}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
