"use client";
import { useRenameModal } from "@/store/UseRemaneModel";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useApiMutation } from "@/hooks/useApiMutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const RenameModal = () => {
  const {mutate, pending} = useApiMutation(api.board.update);

  const { isOpen, onClose, initialValues } = useRenameModal();
  const [title, setTitle] = useState(initialValues.title);

  useEffect(() => {
    setTitle(initialValues.title);
  }, [initialValues.title]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      id: initialValues.id,
      title,
    })
      .then(() => {
        toast.success("Board Renamed");
        onClose()
      })
      .catch(() => {
        toast.error("Failed ti reanme the Board");
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Edit Board Title
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Enter a new title for this board
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium">
              Board Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              maxLength={60}
              placeholder="Enter new title"
              className="focus-visible:ring-2 focus-visible:ring-primary"
            />
            <p className="text-xs text-muted-foreground">
              {title.length}/60 characters
            </p>
          </div>
          <DialogFooter>
            <div className="flex justify-end space-x-2">
              <DialogClose asChild>
              <Button variant="outline">
                Cancel
              </Button>
              </DialogClose>
              <Button type="submit" disabled={pending} className="bg-primary hover:bg-primary/90">
                Save Changes
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RenameModal;
