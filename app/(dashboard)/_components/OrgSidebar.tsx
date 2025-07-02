import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const OrgSidebar = () => {

  const searchParams = useSearchParams();
  const favorite = searchParams.get("favorite")

  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[240px] pl-5 pt-5 bg-gradient-to-b from-white to-gray-50/80 border-r border-gray-200/60 min-h-screen">
      <Link href="/">
        <div className="flex items-center gap-x-2 p-2 rounded-lg hover:bg-gray-100/80 transition-all duration-200 group">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="logo"
              height={36}
              width={36}
              className="group-hover:scale-110 transition-transform duration-200"
            />
          </div>
          <span
            className={cn(
              "font-semibold text-2xl text-gray-800 group-hover:text-gray-900 transition-colors duration-200",
              font.className
            )}
          >
            SketchSync
          </span>
        </div>
      </Link>
      <div className="px-2 space-y-4">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              },
              organizationSwitcherTrigger: {
                padding: "12px 16px",
                width: "100%",
                borderRadius: "10px",
                border: "1px solid #E5E7EB",
                justifyContent: "space-between",
                backgroundColor: "white",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                transition: "all 0.2s ease-in-out",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
              },
              organizationSwitcherTriggerHover: {
                backgroundColor: "#F9FAFB",
                borderColor: "#D1D5DB",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              },
              organizationSwitcherTriggerActive: {
                backgroundColor: "#F3F4F6",
                borderColor: "#9CA3AF",
              },
            },
          }}
        />
        <div className="space-y-2 w-full">
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.999 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              asChild
              size="lg"
              variant={favorite ? "ghost" : "secondary"}
              className="w-full justify-start gap-x-2 px-4 py-5 text-gray-700 hover:ring-1 hover:text-gray-900"
            >
              <Link href="/">
                <div className="flex items-center gap-x-2">
                  <LayoutDashboard className="h-5 w-5" />
                  <span>Team Board</span>
                </div>
              </Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.999 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              asChild
              size="lg"
              variant={favorite ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-x-2 px-4 py-5 text-gray-700 hover:ring-1 hover:text-gray-900",
                favorite ? "animate-fade-in" : "animate-fade-out"
              )}
            >
              <Link href={{
                pathname : "/",
                query : {favorite : true}
              }}>
                <div className="flex items-center gap-x-2">
                  <Star className="h-5 w-5" />
                  <span>Favorite Board</span>
                </div>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrgSidebar;
