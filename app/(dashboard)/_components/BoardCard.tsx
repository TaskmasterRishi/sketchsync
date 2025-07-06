import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { Ellipsis, Star, X } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";
import { Actions } from "@/components/actions";
import { useApiMutation } from "@/hooks/useApiMutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

interface BoardCardProps {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  createdAt: string;
  imageUrl: string;
  orgId: string;
  isFavorite: boolean;
}

const BoardCard = ({
  id,
  title,
  authorName,
  authorId,
  createdAt,
  imageUrl,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const [isStarFilled, setIsStarFilled] = React.useState(isFavorite);
  const { userId } = useAuth();
  const authLable = userId === authorId ? "you" : authorName;

  const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(
    api.board.favorites
  );

  const { mutate: onUnfavorite, pending: pendingUnfavorite } = useApiMutation(
    api.board.unFavorites
  );

  const toggleStar = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    console.log("Toggling star. Current isFavorite:", isFavorite);
    setIsStarFilled(!isStarFilled);
    if (isFavorite) {
      console.log("Calling onUnfavorite with id:", id);
      onUnfavorite({ id })
        .catch(() => toast.error("Failed to Unfavorite"));
    } else {
      console.log("Calling onFavorite with id and orgId:", id, orgId);
      onFavorite({ id, orgId })
        .catch(() => toast.error("Failed to Favorite"));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.15)",
        borderRadius: "1rem",
      }}
    >
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{authLable}</CardDescription>
          <CardAction>
            <div className="flex gap-4">
              <motion.div
                whileTap={{ scale: 0.9 }}
                onClick={toggleStar}
                style={{ cursor: "pointer" }}
              >
                <motion.div
                  animate={{
                    rotate: isStarFilled ? [0, 180, 360] : 0,
                    color: isStarFilled ? "#FFD700" : "currentColor",
                    scale: isStarFilled ? [1, 1.2, 1] : 1,
                    y: isStarFilled ? [0, -11, 0] : [0, -10, 0],
                  }}
                  transition={{
                    rotate: { duration: 0.5 },
                    scale: { duration: 0.3, repeat: 1, repeatType: "reverse" },
                    y: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <Star
                    className="w-5 h-5"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStar(e);
                    }}
                    fill={isStarFilled ? "currentColor" : "none"}
                  />
                </motion.div>
              </motion.div>

              <Actions id={id} title={title} side="right" />
            </div>
          </CardAction>
        </CardHeader>
        <Link href={`../board/${id}`}>
          <CardContent>
            <Image
              src={imageUrl}
              alt={title}
              width={400}
              height={400}
              className="w-full h-[250px] lg:h-[150px] object-cover object-left-top"
            />
          </CardContent>
        </Link>

        <CardFooter>
          <p>{format(new Date(createdAt), "MMM d, yyyy 'at' h:mm a")}</p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BoardCard;

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
    >
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2 mt-2" />
          <CardAction>
            <div className="flex gap-4">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Skeleton className="w-full h-[150px]" />
        </CardContent>
        <CardFooter>
          <Skeleton className="h-4 w-1/3" />
        </CardFooter>
      </Card>
    </motion.div>
  );
};
