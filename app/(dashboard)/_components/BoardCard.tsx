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
  const [isRotated, setIsRotated] = React.useState(false);

  const toggleStar = () => {
    setIsStarFilled(!isStarFilled);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{authorName}</CardDescription>
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
                    y: isStarFilled ? [0,-11, 0] : [0,-10, 0],
                  }}
                  transition={{ 
                    rotate: { duration: 0.5 },
                    scale: { duration: 0.3, repeat: 1, repeatType: "reverse" },
                    y: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <Star
                    className="w-5 h-5"
                    fill={isStarFilled ? "currentColor" : "none"}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsRotated(!isRotated)}
                style={{ cursor: "pointer" }}
              >
                <motion.div
                  animate={{
                    rotate: isRotated ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {isRotated ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <Ellipsis className="w-5 h-5" />
                  )}
                </motion.div>
              </motion.div>
            </div>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={400}
            className="w-full h-[200px] object-cover"
          />
        </CardContent>
        <CardFooter>
          <p>{format(new Date(createdAt), "MMM d, yyyy")}</p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BoardCard;
