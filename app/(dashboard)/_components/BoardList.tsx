import React from "react";
import EmptySearch from "./EmptySearch";
import EmptyBoard from "./EmptyBoard";
import EmptyFavorite from "./EmptyFavorite";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";
import BoardCard from "./BoardCard";
import NewBoardBtn from "./NewBoardBtn";
import { Skeleton } from "@/components/ui/skeleton";

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
      <div>
      <h2 className="text-3xl font-bold">
        {query.favorites ? "Favorite Boards" : "Team Boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-5 mt-8 pb-10">
        
        <NewBoardBtn orgId={orgId} disabled={false}/>
        <BoardCard.Skeleton/>
        <BoardCard.Skeleton/>
        <BoardCard.Skeleton/>
        <BoardCard.Skeleton/>
        <BoardCard.Skeleton/>
        
      </div>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-5 mt-8 pb-10">
        
        <NewBoardBtn orgId={orgId} disabled={false}/>

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
              //@ts-ignore
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
