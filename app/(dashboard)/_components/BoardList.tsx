import React from "react";
import EmptySearch from "./EmptySearch";
import EmptyBoard from "./EmptyBoard";
import EmptyFavorite from "./EmptyFavorite";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
    const data = [];

    if(!data?.length && query.search){
        return (
            <div>
                <EmptySearch/>
            </div>
        );
    }

    if(!data?.length && query.favorites){
        return (
            <div>
                <EmptyFavorite/>
            </div>
        );
    }

    if(!data?.length ){
        return (
            <div>
                <EmptyBoard/>
            </div>
        );
    }
    return <div>{JSON.stringify(query)}</div>;
};

export default BoardList;
