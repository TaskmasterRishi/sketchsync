"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Hint from "@/components/Hint";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint label="Create organization"
          side="right"
          align="start"
          sideOffset={10}
          >
            <Button variant={"glass"} className="cursor-pointer w-9 h-9">
              <Plus className="w-4 h-4" />
            </Button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-transparent border-none shadow-none p-0">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
