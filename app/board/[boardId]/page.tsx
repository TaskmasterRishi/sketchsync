"use client";
import React from "react";
import Canvas from "./_component/Canvas";
import { Room } from "@/components/Room";
import Loading from "./_component/Loading";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  //@ts-ignore
  const resolvedParams = React.use(params);
  //@ts-ignore
  const boardId = resolvedParams.boardId;

  return (
    <div>
      <Room roomId={boardId} fallback={<Loading />}>
        <Canvas boardId={boardId} />
      </Room>
    </div>
  );
};

export default BoardIdPage;
