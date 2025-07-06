import React from "react";
import EmptySearch from "./EmptySearch";
import EmptyBoard from "./EmptyBoard";
import EmptyFavorite from "./EmptyFavorite";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import BoardCard from "./BoardCard";
import NewBoardBtn from "./NewBoardBtn";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId ,...query});

  if (data === undefined || !data) {
    return (
      <div>
        <h2 className="text-3xl font-bold">
          {query.favorites ? "Favorite Boards" : "Team Boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }

  if (!data.length && query.search) {
    return <EmptySearch />;
  }

  if (!data.length && query.favorites) {
    return <EmptyFavorite />;
  }

  if (!data.length) {
    return <EmptyBoard />;
  }
  return (
    <div>
      <h2 className="text-3xl font-bold">
        {query.favorites ? "Favorite Boards" : "Team Boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  gap-5 mt-8 pb-10">
        
        <NewBoardBtn orgId={orgId} disabled={false}/>

        {data
          .filter((board) => !query.favorites || board.isFavorite)
          .map((board) => {
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
                isFavorite={board.isFavorite}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BoardList;
