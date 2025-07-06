import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { Plus, Loader2, CircleOff } from "lucide-react";
import { toast } from 'sonner';
import { useApiMutation } from '@/hooks/useApiMutation';
import { api } from "@/convex/_generated/api";

interface NewBoardBtnProps {
  orgId: string;
  disabled: boolean;
}

const NewBoardBtn = ({ orgId, disabled }: NewBoardBtnProps) => {
    const { mutate, pending } = useApiMutation(api.board.create);

    const onClick = () => {
        if (!orgId) {
            console.error("Error: orgId is missing!");
            return;
        }
        mutate({
            orgId,
            title: "untitled"
        })
        .then((id) => {
            toast.success("Board Created");
        })
        .catch(() => toast.error("Failed to create a board"));
    };

    return (
        <motion.div
            whileHover={!disabled && !pending ? {
                scale: 1.05,
                boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.15)",
                borderRadius: "1rem",
            } : undefined}
            whileTap={!disabled && !pending ? { scale: 0.95 } : undefined}
        >
            <Button
                disabled={disabled || pending}
                onClick={onClick}
                className={cn(
                    "col-span-1 w-full h-full bg-[#831bff] hover:bg-[#821bffa6] rounded-xl transition-all duration-200 ease-in-out",
                    (disabled || pending) && "bg-gray-400 text-gray-600 cursor-not-allowed hover:bg-gray-400 active:bg-gray-400"
                )}
            >
                <div className="flex flex-col items-center justify-center gap-2 p-4">
                    {pending ? (
                        <Loader2 className="w-24 h-24 text-white animate-spin" />
                    ) : (
                        <>
                            {disabled ? (
                                <CircleOff className="w-24 h-24 text-white stroke-3" />
                            ) : (
                                <Plus className="w-24 h-24 text-white stroke-3" />
                            )}
                            <span className="text-white font-semibold text-xl">New Board</span>
                        </>
                    )}
                </div>
            </Button>
        </motion.div>
    );
};

export default NewBoardBtn;