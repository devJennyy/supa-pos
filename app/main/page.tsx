import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/ui/navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Page = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        <Navbar />
      </main>
    </SidebarProvider>
  );
};

export default Page;
