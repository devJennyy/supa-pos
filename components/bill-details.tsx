"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";


export function RightSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar collapsible="icon" {...props} className="w-full max-w-[380px]">
      <SidebarHeader>
        <h1 className="text-xl font-semibold p-2">Bill Details</h1>
      </SidebarHeader>
      <SidebarContent>
        

        
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
