"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/useApiMutation";
import { api } from "@/convex/_generated/api";
import ConfirmModel from "./ConfirmModel";
import { useState } from "react";
import StateBtn from "./StateBtn";
import { useRenameModal } from "@/store/UseRemaneModel";

interface ActionProps {
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export const Actions = ({ side, sideOffset, id, title }: ActionProps) => {
  const { onOpen } = useRenameModal();
  const { mutate, pending } = useApiMutation(api.board.remove);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success("Link Copied"))
      .catch(() => toast.error("Failed to copy link"));
  };

  const onDelete = () => {
    mutate({ id })
      .then(() => {
        toast.success("Board deleted");
      })
      .catch(() => toast.error("Failed to delete the board"));
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <StateBtn />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          onClick={(e) => e.stopPropagation()}
          side={side}
          sideOffset={sideOffset}
          className="w-60"
        >
          <DropdownMenuItem className="p-3 cursor-pointer" onClick={onCopyLink}>
            <Link2 className="w-4 h-4 mr-2" />
            <p>Copy Board Link</p>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-3 cursor-pointer" onClick={() => onOpen(id,title)}>
            <Pencil className="w-4 h-4 mr-2" />
            <p>Rename</p>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="p-3 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsConfirmOpen(true);
            }}
          >
            <Trash2 className="w-4 h-4 mr-2 text-red-500" />
            <p className="text-red-500"> Delete</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ConfirmModel
        header={title}
        description="This will delete this board and all of it's contents."
        disabled={pending}
        onConfirm={onDelete}
        open={isConfirmOpen}
        onOpenChange={setIsConfirmOpen}
      />
    </div>
  );
};
