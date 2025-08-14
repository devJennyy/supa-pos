"use client"
import React, { useRef, useState } from "react";

type IconWithSizeProps = {
  size?: number | string;
  className?: string;
};

const CategoryCard = ({
  category,
}: {
  category: {
    title: string;
    url?: string;
    icon?: React.ComponentType<IconWithSizeProps>;
    iconSize?: number | string;
    emoji: string;
    emojiSize?: string;
    isActive?: boolean;
  }[];
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
    <div
      ref={carouselRef}
      className="flex gap-5 overflow-x-hidden cursor-grab select-none"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {category?.map((item, index) => (
        <button
          key={index}
          className={`flex-shrink-0 w-25 h-25 rounded-xl border flex flex-col justify-center items-center gap-2 hover:bg-input hover:text-primary text-secondary transition-default cursor-pointer ${
            item.isActive ? "bg-input" : ""
          }`}
        >
          {item.icon ? (
            <item.icon size={item.iconSize ?? 20} className="text-primary" />
          ) : (
            <p className={`text-secondary text-sm ${item.emojiSize ?? "text-[24px]"}`}>
              {item.emoji}
            </p>
          )}

          <p className="text-secondary text-sm">{item.title}</p>
        </button>
      ))}
    </div>
  );
};

export default CategoryCard;
