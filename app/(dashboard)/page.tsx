"use client";
import React from "react";
import EmptyOrg from "./_components/EmptyOrg";
import { useOrganization } from "@clerk/nextjs";
import BoardList from "./_components/BoardList";
import Loader from "@/components/auth/Loader";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization, isLoaded } = useOrganization();

  // Unwrap searchParams with React.use()
  //@ts-ignore
  const params = React.use(searchParams);

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div className=" flex-1 h-[calc(100%-80px)] p-6">
      {
      //@ts-ignore
      !organization ? <EmptyOrg /> : <BoardList orgId={organization?.id} query={params}/>}
    </div>
  );
};

export default DashboardPage;
