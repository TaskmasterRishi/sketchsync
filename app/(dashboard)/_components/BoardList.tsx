import React from "react";
import EmptySearch from "./EmptySearch";
import EmptyBoard from "./EmptyBoard";
import EmptyFavorite from "./EmptyFavorite";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";
import BoardCard from "./BoardCard";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId });

  if (data === undefined) {
    return (
      <div className="h-full flex justify-center items-start">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  if (!data?.length && query.search) {
    return (
      <div>
        <EmptySearch />
      </div>
    );
  }

  if (!data?.length && query.favorites) {
    return (
      <div>
        <EmptyFavorite />
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div>
        <EmptyBoard />
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-3xl font-bold">
        {query.favorites ? "Favorite Boards" : "Team Boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        {data.map((board) => {
          console.log("Image URL:", board.imageUrl);
          return (
            <BoardCard 
              key={board._id} 
              id={board._id} 
              title={board.title} 
              imageUrl={board.imageUrl} 
              authorId={board.authorId} 
              authorName={board.authorName} 
              createdAt={board._creationTime} 
              orgId={board.orgId} 
              isFavorite={false} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default BoardList;
