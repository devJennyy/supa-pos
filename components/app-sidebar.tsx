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
import { FaHome } from "react-icons/fa";
import { BsBoxFill, BsFillMoonStarsFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { HiDocumentReport } from "react-icons/hi";
import { RiSettings3Fill } from "react-icons/ri";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: FaHome,
      iconSize: 19,
      isActive: true,
    },
    {
      title: "Inventory",
      url: "#",
      icon: BsBoxFill,
      iconSize: 15,
      isActive: true,
    },
    {
      title: "Analytics",
      url: "#",
      icon: IoStatsChart,
      iconSize: 16,
      isActive: true,
    },
    {
      title: "Reports",
      url: "#",
      icon: HiDocumentReport,
      isActive: true,
      iconSize: 20,
    },
  ],
  settings: [
    {
      title: "Account Settings",
      url: "#",
      icon: RiSettings3Fill,
      isActive: true,
      iconSize: 19,
    },
    {
      title: "Theme Color",
      url: "#",
      icon: BsFillMoonStarsFill,
      isActive: true,
      iconSize: 15,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();

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
