"use client";
import React from "react";
import EmptyOrg from "./_components/EmptyOrg";
import { useOrganization } from "@clerk/nextjs";
import BoardList from "./_components/BoardList";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization();

  // Unwrap searchParams with React.use()
  //@ts-ignore
  const params = React.use(searchParams);

  return (
    <div className=" flex-1 h-[calc(100%-80px)] p-6">
      { 
      JSON.stringify(params)
      }
      {
      //@ts-ignore
      !organization ? <EmptyOrg /> : <BoardList orgId={organization?.id} query={params}/>}
    </div>
  );
};

export default DashboardPage;
