import React from "react";

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
  return (
    <div className="flex gap-5">
      {category?.map((item, index) => {
        return (
          <button
            key={index}
            className={`h-25 px-7 rounded-xl border flex flex-col justify-center items-center gap-2 hover:bg-input hover:text-primary text-secondary transition-default cursor-pointer select-none ${
              item.isActive ? "bg-input" : ""
            }`}
          >
            {item.icon ? (
              <item.icon
                size={item.iconSize ?? 20}
                className="text-primary"
              />
            ) : (
              <p
                className={`text-secondary text-sm ${
                  item.emojiSize ?? "text-[24px]"
                }`}
              >
                {item.emoji}
              </p>
            )}

            <p className="text-secondary text-sm">{item.title}</p>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryCard;
