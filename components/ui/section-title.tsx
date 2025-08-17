import React from "react";

interface SectionTitleProps {
  title: string;
  variant?: "default" | "secondary";
  label?: string;
}

const SectionTitle = ({ title, label }: SectionTitleProps) => {
  return (
    <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-1">
      <h1 className="font-semibold text-foreground">{title}</h1>
      {label && <p className="lg:text-sm text-xs text-secondary">{label}</p>}
    </div>
  );
};

export default SectionTitle;
