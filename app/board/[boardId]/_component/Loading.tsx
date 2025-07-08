import { Loader2, MousePointer2, MousePointerClick, User } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <main className="h-screen w-full bg-background flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
        <div className="absolute inset-0 rounded-full border-4 border-primary/10"></div>
      </div>
      <p className="text-sm text-muted-foreground">Loading board...</p>
      
      {/* Info skeleton at top left */}
      <div className="absolute top-2 left-2 bg-white rounded-xl p-4 h-fit shadow-md">
        <Skeleton className="w-20 h-6" />
      </div>

      {/* Participants skeleton at top right */}
      <div className="absolute top-2 right-2 bg-white rounded-xl p-4 h-fit shadow-md flex items-center gap-2">
        <div className="flex -space-x-2">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="w-8 h-8 rounded-full" />
        </div>
        <User className="w-4 h-4 text-muted-foreground" />
      </div>
      
      {/* Board element skeletons with cursor icons */}
      <div className="absolute top-20 left-10">
        <Skeleton className="w-40 h-24" />
        <MousePointer2 className="absolute -top-3 -right-3 w-5 h-5 text-primary" />
      </div>
      <div className="absolute top-40 right-20">
        <Skeleton className="w-32 h-32" />
        <MousePointerClick className="absolute -top-3 -right-3 w-5 h-5 text-primary" />
      </div>
      <div className="absolute bottom-20 left-1/4">
        <Skeleton className="w-48 h-16" />
      </div>
      <Skeleton className="absolute bottom-40 right-1/3 w-24 h-24 rounded-full" />
      <Skeleton className="absolute top-1/3 left-1/2 w-64 h-20" />
      
      {/* Toolbar skeleton on left middle vertical */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
        <Skeleton className="w-10 h-10 rounded-md" />
        <Skeleton className="w-10 h-10 rounded-md" />
        <Skeleton className="w-10 h-10 rounded-md" />
        <Skeleton className="w-10 h-10 rounded-md" />
      </div>
    </main>
  );
};

export default Loading;
