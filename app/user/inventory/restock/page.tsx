import Item from "@/components/inventory/Item";
import Categories from "@/components/ui/categories";
import React from "react";

const Page = () => {
  return (
    <main className="flex flex-1 flex-col gap-8 lg:p-5 p-4">
      <Categories showAddButton />
      <Item showAddButton/>
    </main>
  );
};

export default Page;
