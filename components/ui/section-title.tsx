import React from "react";

interface SectionTitleProps {
  title: string;
  label?: string;
  direction?: "row" | "col";
}

const SectionTitle = ({ title, label, direction = "row" }: SectionTitleProps) => {
  return (
    <div
      className={`flex justify-between gap-1 ${
        direction === "row" ? "flex-row items-center" : "flex-col items-start"
      }`}
    >
      <h1 className="font-semibold text-foreground">{title}</h1>
      {label && <p className="lg:text-sm text-[13px] text-secondary">{label}</p>}
    </div>
  );
};

export default SectionTitle;
