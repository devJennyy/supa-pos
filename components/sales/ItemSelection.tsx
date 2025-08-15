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

      <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
        {itemDetails?.map((item, index) => (
          <button
            key={index}
            className="border p-5 rounded-xl cursor-pointer text-start hover:bg-secondaryBackground group transition-default"
          >
            <div className="w-full h-full flex flex-col gap-4">
              <div className="w-full h-16 flex justify-between gap-4">
                <div className="w-full max-w-16 h-full border rounded-lg group-hover:bg-input"></div>

                <div className="flex flex-col justify-between gap-1">
                  <p className="text-sm line-clamp-2 text-ellipsis font-semibold">
                    {item.productName}
                  </p>
                  <div className="flex justify-between text-xs !mb-1 text-secondary font-medium">
                    <p>{item.availableStock} Available</p>
                    <p>{item.numberSold} sold</p>
                  </div>
                </div>
              </div>

              <h1 className="font-semibold text-lg !my-1">
                ₱ {item.productPrice}
              </h1>

              <div className="flex flex-col gap-3">
                <div className="h-9 bg-secondaryBackground rounded-md flex justify-between items-center px-3 group-hover:bg-primary/5">
                  <div className="p-1 bg-input rounded-full flex justify-center items-center group-hover:bg-primary/15">
                    <FiMinus size={15} />
                  </div>
                  <p className="font-bold">2</p>
                  <div className="p-1 bg-input rounded-full flex justify-center items-center group-hover:bg-primary">
                    <FiPlus size={15} />
                  </div>
                </div>

                <Button className="font-semibold">Add to Sale</Button>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemSelection;
