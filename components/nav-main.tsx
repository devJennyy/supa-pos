import React from "react";
import { Collapsible, CollapsibleTrigger } from "../components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

type IconWithSizeProps = {
  size?: number | string;
  className?: string;
};

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: React.ComponentType<IconWithSizeProps>;
    iconSize?: number | string;
    isActive?: boolean;
  }[];
}) {
  const { state } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild className="h-14 px-3">
                {state === "collapsed" ? (
                  <SidebarMenuButton
                    tooltip={item.title}
                    className="flex gap-3 sidebar-close-btn cursor-pointer"
                  >
                    <div className="w-7.5 h-7.5 flex justify-center items-center text-secondary sidebar-icon">
                      {item.icon && <item.icon size={item.iconSize ?? 20} />}
                    </div>
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                ) : (
                  <SidebarMenuButton
                    key={item.title}
                    className="flex gap-3 items-center relative px-3 h-14 sidebar-btn transition-default cursor-pointer"
                    tooltip={item.title}
                  >
                    <div className="w-7.5 h-7.5 flex justify-center items-center rounded-md transition-colors sidebar-btn-icon text-secondary">
                      {item.icon && <item.icon size={item.iconSize ?? 20} />}
                    </div>
                    <span className="text-secondary sidebar-label">
                      {item.title}
                    </span>
                  </SidebarMenuButton>
                )}
              </CollapsibleTrigger>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
