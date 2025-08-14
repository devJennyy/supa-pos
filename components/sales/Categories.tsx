import React from "react";
import SectionTitle from "../ui/section-title";
import CategoryCard from "../ui/category-card";

const categories = [
  {
    title: "Snacks",
    emoji: "🥨",
    isActive: true,
  },
  {
    title: "Drinks",
    emoji: "🧃",
    isActive: false,
  },
  {
    title: "Canned",
    emoji: "🥫",
    isActive: false,
  },
  {
    title: "Goods",
    emoji: "🍚",
    isActive: false,
  },
  {
    title: "Sweet",
    emoji: "🍬",
    isActive: false,
  },
  {
    title: "Condiments",
    emoji: "🌶️",
    isActive: false,
  },
  {
    title: "Frozen",
    emoji: "❄️",
    isActive: false,
  },
  {
    title: "Bakery",
    emoji: "🥐",
    isActive: false,
  },
  {
    title: "Fruits",
    emoji: "🍎",
    isActive: false,
  },
  {
    title: "Vegetables",
    emoji: "🥦",
    isActive: false,
  },
  {
    title: "Dairy",
    emoji: "🧀",
    isActive: false,
  },
  {
    title: "Fruits",
    emoji: "🍎",
    isActive: false,
  },
  {
    title: "Vegetables",
    emoji: "🥦",
    isActive: false,
  },
  {
    title: "Dairy",
    emoji: "🧀",
    isActive: false,
  },
  {
    title: "Snacks",
    emoji: "🥨",
    isActive: true,
  },
  {
    title: "Drinks",
    emoji: "🧃",
    isActive: false,
  },
  {
    title: "Canned",
    emoji: "🥫",
    isActive: false,
  },
  {
    title: "Goods",
    emoji: "🍚",
    isActive: false,
  },
  {
    title: "Sweet",
    emoji: "🍬",
    isActive: false,
  },
  {
    title: "Condiments",
    emoji: "🌶️",
    isActive: false,
  },
  {
    title: "Frozen",
    emoji: "❄️",
    isActive: false,
  },
  {
    title: "Bakery",
    emoji: "🥐",
    isActive: false,
  },
  {
    title: "Fruits",
    emoji: "🍎",
    isActive: false,
  },
  {
    title: "Vegetables",
    emoji: "🥦",
    isActive: false,
  },
  {
    title: "Dairy",
    emoji: "🧀",
    isActive: false,
  },
  {
    title: "Fruits",
    emoji: "🍎",
    isActive: false,
  },
  {
    title: "Vegetables",
    emoji: "🥦",
    isActive: false,
  },
  {
    title: "Dairy",
    emoji: "🧀",
    isActive: false,
  },

];

const Categories = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionTitle title={"Categories"} />

      <CategoryCard category={categories} />
    </div>
  );
};

export default Categories;
