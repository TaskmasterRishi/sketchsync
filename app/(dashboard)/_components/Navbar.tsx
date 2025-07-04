"use client";

import {
  OrganizationSwitcher,
  useOrganization,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import { SearchInput } from "./SeachInput";
import InviteButton from "./InviteButton";

const Navbar = () => {
  const {organization} = useOrganization();

  return (
    <div className="flex flex-row items-center gap-y-4 lg:gap-x-4 p-4 h-[80px] lg:p-5">
      <div className="hidden lg:block w-full lg:w-auto lg:flex-1">
        <SearchInput />
      </div>
      <div className="w-full lg:w-auto lg:hidden">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "200px",
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
      </div>
      <div className="flex items-center gap-x-4">
        {organization && <InviteButton />}

        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
