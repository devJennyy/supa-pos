"use client";
import React, { useRef, useState } from "react";
import SectionTitle from "../ui/section-title";
import { Button } from "./button";
import { LuPackagePlus } from "react-icons/lu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import EmojiPicker, { Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";

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
  const [icon, setIcon] = useState("📦");
  const { theme } = useTheme();
  const [showPicker, setShowPicker] = useState(false);

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
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <LuPackagePlus />
                  <p>Add Categories</p>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Category</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 !mt-2">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Name</Label>
                    <Input
                      id="name-1"
                      name="name"
                      placeholder="e.g. Beverages"
                    />
                  </div>
                  <div className="grid gap-3">
                    <label htmlFor="icon-1">Emoji / Icon</label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="icon-1"
                        name="icon"
                        value={icon}
                        onChange={(e) => setIcon(e.target.value)}
                        placeholder="Select / add emoji"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowPicker((prev) => !prev)}
                        className="p-2"
                      >
                        <p className="text-lg !mb-1">🍔</p>
                      </Button>
                    </div>
                    {showPicker && (
                      <div className="absolute right-5 top-[14.2rem] z-50 max-w-[90vw] bg-background rounded-lg shadow-lg border p-3 dark:hidden">
                        <div className="flex justify-between items-center">
                          <p className="text-sm">Choose emoji</p>
                          <button
                            className="text-sm px-2 py-1 rounded hover:bg-muted !mb-2"
                            onClick={() => setShowPicker(false)}
                          >
                            ✕
                          </button>
                        </div>
                        <EmojiPicker
                          width="100%"
                          height={350}
                          theme={Theme.LIGHT}
                          onEmojiClick={(emojiData) => {
                            setIcon(emojiData.emoji);
                          }}
                        />
                      </div>
                    )}
                    {showPicker && (
                      <div className="absolute right-5 top-[14.2rem] z-50 max-w-[90vw] bg-background rounded-lg shadow-lg border p-3 dark:block hidden">
                        <div className="flex justify-between items-center">
                          <p className="text-sm">Choose emoji</p>
                          <button
                            className="text-sm px-2 py-1 rounded hover:bg-muted !mb-2"
                            onClick={() => setShowPicker(false)}
                          >
                            ✕
                          </button>
                        </div>
                        <EmojiPicker
                          width="100%"
                          height={350}
                          theme={Theme.DARK}
                          onEmojiClick={(emojiData) => {
                            setIcon(emojiData.emoji);
                          }}
                        />
                      </div>
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
