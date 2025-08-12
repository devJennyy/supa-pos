import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="w-full flex items-center gap-2">
            <SidebarTrigger />
            <div className="w-full h-16 bg-secondaryBackground border-b">

            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-5">
            <h1>Today&apos;s Overview</h1>
          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
            <div className="bg-secondaryBackground border aspect-video rounded-xl" />
            <div className="bg-secondaryBackground border aspect-video rounded-xl" />
            <div className="bg-secondaryBackground border aspect-video rounded-xl" />
            <div className="bg-secondaryBackground border aspect-video rounded-xl" />
          </div>
          <div className="bg-secondaryBackground border min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
