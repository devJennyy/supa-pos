"use client";

import * as React from "react";
import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import Logo from "./logo";
import { FaHome, FaTags } from "react-icons/fa";
import { BsBoxFill, BsFillMoonStarsFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { HiDocumentReport } from "react-icons/hi";
import { RiSettings3Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const pathname = usePathname();

  const data = {
    navMain: [
      {
        title: "Dashboard",
        url: "/user/dashboard",
        icon: FaHome,
        iconSize: 19,
        isActive: false,
      },
      {
        title: "Sales",
        url: "/user/sales",
        icon: FaTags,
        iconSize: 17,
        isActive: false,
      },
      {
        title: "Inventory",
        url: "/user/inventory",
        icon: BsBoxFill,
        iconSize: 15,
        isActive: false,
      },
      {
        title: "Analytics",
        url: "/user/analytics",
        icon: IoStatsChart,
        iconSize: 16,
        isActive: false,
      },
      {
        title: "Reports",
        url: "/user/reports",
        icon: HiDocumentReport,
        iconSize: 20,
        isActive: false,
      },
    ],
    settings: [
      {
        title: "Account Settings",
        url: "/user/settings",
        icon: RiSettings3Fill,
        iconSize: 19,
        isActive: false,
      },
      {
        title: "Theme Color",
        url: "/user/theme",
        icon: BsFillMoonStarsFill,
        iconSize: 15,
        isActive: false,
      },
    ],
  };

  const cleanPath = pathname.replace(/\/+$/, "");

  data.navMain = data.navMain.map((item) => ({
    ...item,
    isActive:
      cleanPath === "/user"
        ? item.url === "/user/dashboard"
        : cleanPath.startsWith(item.url),
  }));

  data.settings = data.settings.map((item) => ({
    ...item,
    isActive: cleanPath.startsWith(item.url),
  }));

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {state === "collapsed" ? (
          <div className="!mx-2 flex justify-center items-center">
            <SidebarSeparator />
          </div>
        ) : (
          <SidebarGroupLabel className="font-medium text-sm text-muted-foreground !mx-2">
            Account Pages
          </SidebarGroupLabel>
        )}
        <NavMain items={data.settings} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
