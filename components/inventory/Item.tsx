"use client";

import React, { useState } from "react";
import SectionTitle from "../ui/section-title";
import { FiPlus } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const itemDetails = [
  {
    productName:
      "Beng Beng Chocolate Overload Wafer Bar with Chocolate Cream Filling",
    availableStock: "24",
    numberSold: "6",
    productPrice: "12.00",
    unitType: "55g",
  },
  {
    productName: "Kopiko Blanca Coffee Mix",
    availableStock: "50",
    numberSold: "18",
    productPrice: "8.50",
    unitType: "1 pack",
  },
  {
    productName: "Nissin Cup Noodles Beef Flavor Instant Ramen Bowl",
    availableStock: "40",
    numberSold: "25",
    productPrice: "22",
    unitType: "1 bowl",
  },
  {
    productName: "SkyFlakes Crackers",
    availableStock: "100",
    numberSold: "60",
    productPrice: "5.75",
    unitType: "1 pack",
  },
  {
    productName: "Oreo Chocolate Sandwich Cookies with Vanilla Cream Filling",
    availableStock: "35",
    numberSold: "20",
    productPrice: "15.25",
    unitType: "9 pcs",
  },
  {
    productName: "C2 Green Tea",
    availableStock: "75",
    numberSold: "30",
    productPrice: "18",
    unitType: "1 bottle",
  },
  {
    productName: "Piattos Cheese Flavored Potato Crisps",
    availableStock: "45",
    numberSold: "15",
    productPrice: "12.50",
    unitType: "1 pack",
  },
  {
    productName: "Nova Multigrain Snacks",
    availableStock: "38",
    numberSold: "12",
    productPrice: "14.20",
    unitType: "1 pack",
  },
  {
    productName: "Hansel Mocha Sandwich",
    availableStock: "60",
    numberSold: "22",
    productPrice: "10",
    unitType: "1 pack",
  },
  {
    productName: "Fudgee Barr Mocha Filled Snack Cake with Rich Cream",
    availableStock: "48",
    numberSold: "16",
    productPrice: "12.75",
    unitType: "1 pc",
  },
];

interface ItemProps {
  showAddButton?: boolean;
}

const Item = ({ showAddButton }: ItemProps) => {
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [customUnit, setCustomUnit] = useState("");

  const unitOptions = [
    "g (grams)",
    "kg (kilograms)",
    "ml (milliliters)",
    "L (liters)",
    "pcs",
    "pack",
    "bottle",
    "box",
    "tray",
    "can",
    "bowl",
    "Other",
  ];

  const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, "");
    if (!isNaN(Number(rawValue))) {
      setStock(
        rawValue === ""
          ? ""
          : new Intl.NumberFormat("en-US").format(Number(rawValue))
      );
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, "");
    if (!/^\d*\.?\d*$/.test(rawValue)) return;

    const [rawInt, rawDecimal] = rawValue.split(".");
    let intPart = rawInt;
    const decimalPart =
      rawDecimal !== undefined ? rawDecimal.slice(0, 2) : undefined;

    if (intPart) {
      intPart = new Intl.NumberFormat("en-US").format(Number(intPart));
    }

    setPrice(decimalPart !== undefined ? `${intPart}.${decimalPart}` : intPart);
  };

  const finalUnitType = unit === "Other" ? customUnit : unit;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <SectionTitle title="Snacks" />

        {showAddButton && (
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <FiPlus className="mr-2" />
                  Add New Item
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Item</DialogTitle>
                  <DialogDescription>
                    Fill all required inputs. Click save when you&apos;re done.
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 !mt-2">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Item Name</Label>
                    <Input id="name-1" name="name" placeholder="Chocolate" />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="stock-1">Stock</Label>
                    <Input
                      id="stock-1"
                      name="stock"
                      type="text"
                      value={stock}
                      onChange={handleStockChange}
                      placeholder="261"
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="price-1">Price</Label>
                    <Input
                      id="price-1"
                      name="price"
                      type="text"
                      value={price}
                      onChange={handlePriceChange}
                      placeholder="212.99"
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label>Unit Type</Label>
                    <Select onValueChange={(val) => setUnit(val)} value={unit}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select unit type" />
                      </SelectTrigger>
                      <SelectContent>
                        {unitOptions.map((opt, idx) => (
                          <SelectItem key={idx} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {unit === "Other" && (
                      <Input
                        className="mt-2 w-full"
                        placeholder="Enter custom unit type"
                        value={customUnit}
                        onChange={(e) => setCustomUnit(e.target.value)}
                      />
                    )}
                  </div>
                </div>

                <DialogFooter className="lg:!mt-4 !mt-2">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        )}
      </div>

      <div className="grid lg:gap-5 gap-3 lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
        {itemDetails?.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-transparent border lg:p-5 p-2.5 rounded-xl cursor-pointer text-start hover:bg-input/40 dark:hover:bg-input/30 hover:border-borderBrand/70 dark:hover:border-border group transition-default"
          >
            <div className="w-full flex flex-col justify-between h-full lg:gap-4 gap-1.5">
              <div className="w-full flex flex-col justify-between gap-3">
                <div className="w-full lg:h-32 h-24 border rounded-lg group-hover:bg-input group-hover:border-borderBrand/70 dark:group-hover:border-border"></div>
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
                  <p className="font-semibold">
                    ₱ {item.productPrice}{" "}
                    <span className="text-xs text-muted-foreground">
                      / {item.unitType}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col lg:gap-0.5">
                  <p className="text-secondary">Sold</p>
                  <p className="font-semibold">{item.numberSold}</p>
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
