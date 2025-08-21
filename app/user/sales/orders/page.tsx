"use client";

import React, { useState, useEffect } from "react";
import ItemSelection from "@/components/sales/ItemSelection";
import Categories from "@/components/ui/categories";
import CategoriesSkeleton from "@/components/sales/skeletons/Categories";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-1 flex-col gap-8 lg:p-5 p-4">
      {isLoading ? <CategoriesSkeleton /> : <Categories showAddButton />}
      <ItemSelection />
    </main>
  );
};

export default Page;
