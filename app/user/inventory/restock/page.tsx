"use client";

import Item from "@/components/inventory/Item";
import CategorySkeleton from "@/components/inventory/skeleton/Categories";
import ItemSelectionSkeleton from "@/components/inventory/skeleton/Items";
import Categories from "@/components/ui/categories";
import React, { useEffect, useState } from "react";

export default function RestockPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-1 flex-col gap-8 lg:p-5 p-4">
      {isLoading ? (
        <>
          <CategorySkeleton />
          <ItemSelectionSkeleton />
        </>
      ) : (
        <>
          <Categories showAddButton />
          <Item showAddButton />
        </>
      )}
    </main>
  );
}
