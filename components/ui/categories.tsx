"use client";
import React, { useRef, useState } from "react";
import SectionTitle from "../ui/section-title";
import { Button } from "./button";
import { LuPackagePlus } from "react-icons/lu";

interface Props {
  showAddButton?: boolean;
}

const categories = [
  { title: "Snacks", emoji: "🥨" },
  { title: "Drinks", emoji: "🧃" },
  { title: "Canned", emoji: "🥫" },
  { title: "Goods", emoji: "🍚" },
  { title: "Sweet", emoji: "🍬" },
  { title: "Condiments", emoji: "🌶️" },
  { title: "Bakery", emoji: "🥖" },
  { title: "Fruits", emoji: "🍎" },
  { title: "Vegetables", emoji: "🥦" },
  { title: "Dairy", emoji: "🧀" },
  { title: "Frozen", emoji: "❄️" },
  { title: "Seafood", emoji: "🦞" },
  { title: "Meat", emoji: "🥩" },
  { title: "Beverages", emoji: "☕" },
  { title: "Snacks & Chips", emoji: "🍿" },
  { title: "Noodles & Pasta", emoji: "🍝" },
  { title: "Grains & Rice", emoji: "🌾" },
  { title: "Health & Supplements", emoji: "💊" },
  { title: "Baby Care", emoji: "👶" },
];

const Categories = ({ showAddButton }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <SectionTitle title="Categories" />
        {showAddButton && (
          <Button className="w-fit dark:bg-input border lg:text-sm text-xs font-medium dark:text-primary hover:text-foreground">
            <LuPackagePlus />
            <p>Add Categories</p>
          </Button>
        )}
      </div>

      <div
        ref={carouselRef}
        className="flex lg:gap-5 gap-3 overflow-x-auto pb-4 custom-scrollbar cursor-grab select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {categories.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex-shrink-0 lg:h-25 lg:px-8 px-5 h-20 rounded-xl border flex flex-col justify-center items-center lg:gap-2 gap-1 hover:bg-input hover:text-primary text-secondary transition-default
              ${activeIndex === index ? "bg-input text-foreground" : ""}
            `}
          >
            <p
              className={`${
                index === activeIndex ? "text-primary" : "text-secondary"
              } lg:text-[24px] text-[18px]`}
            >
              {item.emoji}
            </p>
            <p
              className={`lg:text-sm text-xs font-medium ${
                activeIndex === index ? "text-foreground" : "text-secondary"
              }`}
            >
              {item.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
