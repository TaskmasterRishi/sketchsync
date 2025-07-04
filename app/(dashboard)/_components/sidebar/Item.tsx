"use client";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
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
        width={48}
        height={48}
        onClick={onClick}
        className={cn(
          "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition-opacity duration-200 border-2 border-transparent hover:border-red-500 focus:ring-2 focus:ring-blue-500",
          isActive && "opacity-100 ring-2 ring-white hover:border-transparent"
        )}
        aria-label={name}
      />
      </Hint>
    </div>
  );
};

export default Item;
