"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { AppSidebar } from "@/components/app-sidebar";
import { RightSidebar } from "@/components/sales/BillDetails";
import { IoMdClose } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";
import { HiOutlineSearch } from "react-icons/hi";
import SetupModal from "@/components/ui/complete-setup";
import { UserAuth } from "../context/AuthContext";

type SidebarContextType = {
  isRightOpen: boolean;
  openRight: () => void;
  closeRight: () => void;
};

const RightSidebarContext = createContext<SidebarContextType>({
  isRightOpen: false,
  openRight: () => {},
  closeRight: () => {},
});

export const useRightSidebar = () => useContext(RightSidebarContext);

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  // const rightSidebarWidth = 380;
  const auth = UserAuth();
  const profile = auth?.profile;
  const refreshProfile = auth?.refreshProfile;

  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);

  const showRightSidebar =
    pathname.startsWith("/user/sales/orders") ||
    pathname.startsWith("/user/sales/transactions");

  const openRight = useCallback(
    (force = false) => {
      const isTransactionsPage = pathname.startsWith(
        "/user/sales/transactions"
      );

      if (!hasOpenedOnce || (force && isTransactionsPage)) {
        setIsRightSidebarOpen(true);
        setHasOpenedOnce(true);
      }
    },
    [hasOpenedOnce, pathname]
  );

  const closeRight = useCallback(() => {
    setIsRightSidebarOpen(false);
  }, []);

  const cleanUrl = () => {
    if (window.location.hash) {
      window.history.replaceState(
        null,
        document.title,
        window.location.pathname + window.location.search
      );
    }
  };

  useEffect(() => {
    const init = async () => {
      if (refreshProfile) {
        await refreshProfile();
      }
      cleanUrl();
    };

    init();
  }, []);

  return (
    <RightSidebarContext.Provider
      value={{
        isRightOpen: isRightSidebarOpen,
        openRight,
        closeRight,
      }}
    >
      <SetupModal />

      <div className="flex h-screen min-h-fit flex-1 relative">
        {/* Left Sidebar */}
        <SidebarProvider>
          <AppSidebar />

          {/* Main content */}
          <SidebarInset className="flex-1 relative overflow-hidden">
            {/* Header */}
            <header className="flex h-17 w-full max-w-full shrink-0 items-center gap-2 border-b bg-secondaryBackground px-3 overflow-hidden">
              <SidebarTrigger />
              <div className="lg:flex hidden justify-between items-center w-full px-10 py-4 shadow-lg rounded-xl">
                {/* Search Input */}
                <div className="relative w-2/5">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border text-sm rounded-lg pl-10 pr-4 py-2 w-full 
                 focus:outline-none focus:ring-1 focus:ring-input hover:shadow-sm transition placeholder:text-secondary"
                  />
                  <HiOutlineSearch
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary"
                    size={20}
                  />
                </div>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full border bg-input flex items-center justify-center 
             text-lg font-semibold transition cursor-pointer"
                  >
                    {profile?.store_name?.charAt(0).toUpperCase() || "?"}
                  </div>

                  <div className="flex flex-col">
                    <p className="font-semibold text-sm">
                      {profile?.store_name}
                    </p>
                    <p className="text-secondary text-xs font-medium">
                      {`${new Date().toLocaleDateString("en-GB", {
                        weekday: "long",
                      })}, ${new Date().toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}`}
                    </p>
                  </div>
                </div>
              </div>
            </header>

            {/* Content */}
            <motion.div
              // animate={{
              //   marginRight:
              //     showRightSidebar && isRightSidebarOpen
              //       ? rightSidebarWidth
              //       : 0,
              // }}
              transition={{ type: "tween", duration: 0.3 }}
              className="flex flex-col min-h-[calc(100%-4rem)]"
            >
              <div className="flex-1">{children}</div>
            </motion.div>
          </SidebarInset>
        </SidebarProvider>

        {/* Floating Open Arrow */}
        {showRightSidebar && !isRightSidebarOpen && (
          <button
            onClick={() => setIsRightSidebarOpen(true)}
            className="fixed cursor-pointer top-1/2 right-0 transform -translate-y-1/2 z-30 text-foreground bg-secondaryBackground border py-2.5 px-2 rounded-l-lg hover:bg-input transition-default"
          >
            <IoChevronBackOutline size={20} />
          </button>
        )}

        {/* Right Sidebar */}
        <AnimatePresence>
          {showRightSidebar && isRightSidebarOpen && (
            <motion.div
              key="right-sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 right-0 z-20 h-full w-full max-w-[380px] bg-secondaryBackground border-l"
            >
              <SidebarProvider>
                <div className="absolute top-4 right-4 z-30">
                  <IoMdClose
                    size={22}
                    className="cursor-pointer hover:text-foreground text-secondary"
                    onClick={() => setIsRightSidebarOpen(false)}
                  />
                </div>

                <RightSidebar side="right" />
              </SidebarProvider>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </RightSidebarContext.Provider>
  );
}
