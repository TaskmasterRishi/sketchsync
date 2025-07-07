"use client";
import React from "react";
import Canvas from "./_component/Canvas";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  //@ts-ignore
  const unwrappedParams = React.use(params); // Unwrap the params Promise
  return (
    <div>
      <Canvas
        boardId={
          //@ts-ignore
          unwrappedParams.boardId
        }
      />
    </div>
  );
};

export default BoardIdPage;
