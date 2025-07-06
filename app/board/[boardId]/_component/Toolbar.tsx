import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconArrowBack,
  IconArrowForward,
  IconBrandGithub,
  IconBrandX,
  IconCircle,
  IconExchange,
  IconOvalVertical,
  IconPencil,
  IconSquare,
} from "@tabler/icons-react";

export function Toolbar() {
  const links = [
    {
      title: "Pencil",
      icon: (
        <IconPencil className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },

    {
      title: "Square",
      icon: (
        <IconSquare className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Circle",
      icon: (
        <IconCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Oval",
      icon: (
        <IconOvalVertical className="h-full w-full text-neutral-500 dark:text-neutral-300"/> 
      ),
    },

    {
      title: "Undo",
      icon: (
        <IconArrowBack className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Redo",
      icon: (
        <IconArrowForward className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
