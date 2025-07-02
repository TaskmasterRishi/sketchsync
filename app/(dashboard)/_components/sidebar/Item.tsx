"use client";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Hint from "@/components/Hint";

interface ItemPops {
  id: string;
  name: string;
  imageUrl: string;
}

const Item = ({ id, name, imageUrl }: ItemPops) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
       <Hint label={name}
          side="right"
          align="start"
          sideOffset={10}
          >
      <Image
        src={imageUrl}
        alt={name}
        width={80}
        height={80}
        onClick={onClick}
        className={cn(
          "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition-all duration-300 border-2 border-transparent hover:border-gray-300",
          isActive && "opacity-100 border-blue-500 shadow-md"
        )}
      />
      </Hint>
    </div>
  );
};

export default Item;
