"use client";

import * as React from "react";
import { NavMain } from "@/components/ui/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { FaHome, FaTags } from "react-icons/fa";
import { BsBoxFill, BsFillMoonStarsFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { HiDocumentReport } from "react-icons/hi";
import { RiSettings3Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { UserAuth } from "@/app/context/AuthContext";
import Logo from "../ui/logo";
import ConfirmPasswordModal from "../ui/password-lock";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const pathname = usePathname();
  const { signOut } = UserAuth()!;
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const handleAccountSettingsClick = () => {
    setModalOpen(true);
  };

  const navMainItems = [
    { title: "Dashboard", url: "/user/dashboard", icon: FaHome, iconSize: 19 },
    {
      title: "Sales",
      url: "/user/sales",
      icon: FaTags,
      iconSize: 17,
      children: [
        { title: "Orders", url: "/user/sales/orders" },
        { title: "Transactions", url: "/user/sales/transactions" },
      ],
    },
    {
      title: "Inventory",
      url: "/user/inventory",
      icon: BsBoxFill,
      iconSize: 15,
      children: [
        { title: "Restock", url: "/user/inventory/restock" },
        { title: "Low Stocks", url: "/user/inventory/low-stocks" },
        { title: "Deduct Stock", url: "/user/inventory/deduct-stock" },
        { title: "Stock History", url: "/user/inventory/stock-history" },
      ],
    },
    {
      title: "Analytics",
      url: "/user/analytics",
      icon: IoStatsChart,
      iconSize: 16,
    },
    {
      title: "Reports",
      url: "/user/reports",
      icon: HiDocumentReport,
      iconSize: 20,
    },
  ];

  const settingsItems = [
    {
      title: "Account Settings",
      url: "/user/settings/account-settings",
      icon: RiSettings3Fill,
      iconSize: 19,
      // onClick: handleAccountSettingsClick,
    },
    {
      title: "Theme Color",
      url: "/user/settings/theme-switch",
      icon: BsFillMoonStarsFill,
      iconSize: 15,
    },
  ];

  const handleLogout = async () => {
    signOut();
  };

  const logoutItem = {
    title: "Logout",
    icon: MdLogout,
    iconSize: 18,
    onClick: () => handleLogout(),
  };

  const cleanPath = pathname.replace(/\/+$/, "");

  const navMain = navMainItems.map((item) => {
    const isParentActive =
      cleanPath === "/user"
        ? item.url === "/user/dashboard"
        : cleanPath.startsWith(item.url);

    const children =
      item.children?.map((child) => ({
        ...child,
        isActive: cleanPath === child.url,
      })) ?? [];

    return { ...item, isActive: isParentActive, children };
  });

  const settings = settingsItems.map((item) => ({
    ...item,
    isActive: cleanPath.startsWith(item.url),
  }));

  return (
    <>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <Logo />
        </SidebarHeader>

        <SidebarContent className="flex flex-col justify-between h-full">
          <div>
            <NavMain items={navMain} />

            {state === "collapsed" ? (
              <div className="!mx-2 flex justify-center items-center">
                <SidebarSeparator />
              </div>
            ) : (
              <div className="font-medium text-sm text-muted-foreground !mx-4 mt-4 mb-2">
                Account Pages
              </div>
            )}

            <NavMain items={settings} />
          </div>

          <div className="mt-auto !mx-2 mb-4">
            <NavMain items={[logoutItem]} />
          </div>
        </SidebarContent>

        <SidebarRail />
      </Sidebar>

      {/* <ConfirmPasswordModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={() => router.push("/user/settings/account-settings")}
      /> */}
    </>
  );
}
