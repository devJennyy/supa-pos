import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

type IconWithSizeProps = {
  size?: number | string
  className?: string
}

export function NavMain({
  items,
}: {
  items: {
    title: string
    url?: string
    icon?: React.ComponentType<IconWithSizeProps>
    iconSize?: number | string
    isActive?: boolean
    onClick?: () => void
    children?: {
      title: string
      url: string
      isActive?: boolean
    }[]
  }[]
}) {
  const { state } = useSidebar()

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const hasChildren = item.children && item.children.length > 0

          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  {state === "collapsed" ? (
                    item.onClick ? (
                      <SidebarMenuButton
                        tooltip={item.title}
                        onClick={item.onClick}
                        className={`flex gap-3 sidebar-close-btn cursor-pointer ${
                          item.isActive ? "bg-primary text-white" : ""
                        }`}
                      >
                        <div
                          className={`w-7.5 h-7.5 flex justify-center items-center sidebar-icon ${
                            item.isActive ? "text-white" : "text-secondary"
                          }`}
                        >
                          {item.icon && <item.icon size={item.iconSize ?? 20} />}
                        </div>
                      </SidebarMenuButton>
                    ) : (
                      <Link href={item.url ?? "#"} className="block">
                        <SidebarMenuButton
                          tooltip={item.title}
                          className={`flex gap-3 sidebar-close-btn cursor-pointer ${
                            item.isActive ? "bg-primary text-white" : ""
                          }`}
                        >
                          <div
                            className={`w-7.5 h-7.5 flex justify-center items-center sidebar-icon ${
                              item.isActive ? "text-white" : "text-secondary"
                            }`}
                          >
                            {item.icon && <item.icon size={item.iconSize ?? 20} />}
                          </div>
                        </SidebarMenuButton>
                      </Link>
                    )
                  ) : hasChildren ? (
                    <SidebarMenuButton
                      tooltip={item.title}
                      className={`flex gap-3 items-center relative px-3 h-14 sidebar-btn transition-default cursor-pointer ${
                        item.isActive ? "bg-input" : ""
                      }`}
                    >
                      <div
                        className={`w-7.5 h-7.5 flex justify-center items-center rounded-md transition-colors sidebar-btn-icon text-secondary ${
                          item.isActive ? "text-white bg-primary" : ""
                        }`}
                      >
                        {item.icon && <item.icon size={item.iconSize ?? 20} />}
                      </div>
                      <span
                        className={`text-secondary sidebar-label ${
                          item.isActive ? "text-foreground" : ""
                        }`}
                      >
                        {item.title}
                      </span>
                      <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  ) : item.onClick ? (
                    <SidebarMenuButton
                      tooltip={item.title}
                      onClick={item.onClick}
                      className={`flex gap-3 items-center relative px-3 h-14 sidebar-btn transition-default cursor-pointer ${
                        item.isActive ? "bg-input" : ""
                      }`}
                    >
                      <div
                        className={`w-7.5 h-7.5 flex justify-center items-center rounded-md transition-colors sidebar-btn-icon ${
                          item.isActive ? "text-white bg-primary" : "text-secondary"
                        }`}
                      >
                        {item.icon && <item.icon size={item.iconSize ?? 20} />}
                      </div>
                      <span
                        className={`sidebar-label ${
                          item.isActive ? "text-white" : "text-secondary"
                        }`}
                      >
                        {item.title}
                      </span>
                    </SidebarMenuButton>
                  ) : (
                    <Link href={item.url ?? "#"} className="block">
                      <SidebarMenuButton
                        tooltip={item.title}
                        className={`flex gap-3 items-center relative px-3 h-14 sidebar-btn transition-default cursor-pointer ${
                          item.isActive ? "bg-input" : ""
                        }`}
                      >
                        <div
                          className={`w-7.5 h-7.5 flex justify-center items-center rounded-md transition-colors sidebar-btn-icon ${
                            item.isActive ? "text-white bg-primary" : "text-secondary"
                          }`}
                        >
                          {item.icon && <item.icon size={item.iconSize ?? 20} />}
                        </div>
                        <span
                          className={`sidebar-label ${
                            item.isActive ? "text-white" : "text-secondary"
                          }`}
                        >
                          {item.title}
                        </span>
                      </SidebarMenuButton>
                    </Link>
                  )}
                </CollapsibleTrigger>

                {hasChildren && (
                  <CollapsibleContent>
                    <div className="flex pl-3">
                      <div className="w-7.5 flex justify-center">
                        <div className="border-l border-border" />
                      </div>
                      <div className="flex flex-col gap-1 py-1 w-full">
                        {item.children?.map((child) => (
                          <Link key={child.title} href={child.url}>
                            <SidebarMenuButton
                              className={`px-3 py-4.5 text-sm rounded-md ${
                                child.isActive
                                  ? "text-primary font-medium"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {child.title}
                            </SidebarMenuButton>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </CollapsibleContent>
                )}
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
