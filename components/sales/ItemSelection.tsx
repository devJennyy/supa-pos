import React from "react";
import SectionTitle from "../ui/section-title";
import { Button } from "../ui/button";
import { FiMinus, FiPlus } from "react-icons/fi";

const itemDetails = [
  {
    productName: "Beng Beng Chocolate Overload",
    availableStock: "24",
    numberSold: "6",
    productPrice: "12.00",
  },
  {
    productName: "Beng Beng Chocolate Overload",
    availableStock: "24",
    numberSold: "6",
    productPrice: "12.00",
  },
  {
    productName: "Beng Beng Chocolate Overload",
    availableStock: "24",
    numberSold: "6",
    productPrice: "12.00",
  },
  {
    productName: "Beng Beng Chocolate Overload",
    availableStock: "24",
    numberSold: "6",
    productPrice: "12.00",
  },
  {
    productName: "Beng Beng Chocolate Overload",
    availableStock: "24",
    numberSold: "6",
    productPrice: "12.00",
  },
  {
    productName: "Beng Beng Chocolate Overload",
    availableStock: "24",
    numberSold: "6",
    productPrice: "12.00",
  },
];

const ItemSelection = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionTitle title={"Select Items"} />

      <div className="grid lg:gap-5 gap-3 lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
        {itemDetails?.map((item, index) => (
          <button
            key={index}
            className="border lg:p-5 p-2.5 rounded-xl cursor-pointer text-start hover:bg-secondaryBackground group transition-default"
          >
            <div className="w-full h-full flex flex-col lg:gap-4 gap-1">
              <div className="w-full lg:h-16 flex lg:flex-row flex-col justify-between lg:gap-4 gap-2">
                <div className="w-full lg:max-w-16 lg:h-full h-24 border rounded-lg group-hover:bg-input"></div>

                <div className="flex flex-col justify-between gap-1">
                  <p className="lg:text-sm text-xs line-clamp-2 text-ellipsis font-semibold">
                    {item.productName}
                  </p>
                  <div className="flex justify-between lg:text-xs text-[10px] !mb-1 text-secondary font-medium">
                    <p>{item.availableStock} Available</p>
                    <p>{item.numberSold} sold</p>
                  </div>
                </div>
              </div>

              <h1 className="font-semibold lg:text-lg text-sm lg:!my-1 lg:!mb-0 !mb-1">
                ₱ {item.productPrice}
              </h1>

              <div className="flex flex-col lg:gap-3 gap-1.5">
                <div className="lg:h-9 h-7 bg-secondaryBackground rounded-md flex justify-between items-center px-3 group-hover:bg-primary/5">
                  <div className="p-1 bg-input rounded-full flex justify-center items-center group-hover:bg-primary/15">
                    <FiMinus className="lg:text-[15px] text-[11px]"/>
                  </div>
                  <p className="font-bold lg:text-base text-xs">2</p>
                  <div className="p-1 bg-input rounded-full flex justify-center items-center group-hover:bg-primary">
                    <FiPlus className="lg:text-[15px] text-[11px]"/>
                  </div>
                </div>

                <Button className="lg:h-9 h-7 lg:font-semibold lg:text-sm text-xs">Add to Sale</Button>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemSelection;
