import React from "react";

interface SectionTitleProps {
  title: string;
  variant?: "default" | "secondary";
  label?: string;
  direction?: "row" | "col";
}

const SectionTitle = ({
  title,
  variant = "default",
  label,
  direction = "col",
}: SectionTitleProps) => {
  const variantClasses = {
    default: "text-foreground",
    secondary: "text-secondary",
  };

  const flexClasses =
    direction === "row"
      ? "lg:flex-row flex-row justify-between items-center"
      : "lg:flex-col flex-col justify-start";

  return (
    <div className={`w-full flex ${flexClasses} gap-1`}>
      <h1 className={`font-semibold ${variantClasses[variant]}`}>{title}</h1>
      {label && <p className="lg:text-sm text-xs text-secondary">{label}</p>}
    </div>
  );
};

export default SectionTitle;
