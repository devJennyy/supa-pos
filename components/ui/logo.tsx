import React from "react";
import Image from "next/image";
import { SidebarMenuButton } from "./sidebar";

const logo = () => {
  return (
    <SidebarMenuButton size="lg" className="hover:bg-transparent active:bg-transparent focus:bg-transparent">
      <div className="bg-transparent text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
        <Image
          src="/logo/logo.svg"
          alt="Logo"
          width={15}
          height={40}
          priority
        />
      </div>
      <p className="truncate font-bold text-xl font-sofia">
        Supa<span className="text-primary">POS</span>
      </p>
    </SidebarMenuButton>
  );
};

export default logo;
