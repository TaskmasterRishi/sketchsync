"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Hint from "@/components/Hint";

interface NewButtonProps {
  text?: string;
}

const NewButton = ({ text }: NewButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label="Create organization"
            side="right"
            align="start"
            sideOffset={10}
          >
            <Button
              variant={text ? "default" : "glass"}
              className={`cursor-pointer ${!text ? "w-9 h-9" : ""}`}
            >
              <Plus className="w-4 h-4" />
              {text && <span className="ml-2">{text}</span>}
            </Button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-transparent border-none shadow-none p-0">
        <VisuallyHidden>
          <DialogTitle>Create Organization</DialogTitle>
        </VisuallyHidden>
        <div>
          <CreateOrganization />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
