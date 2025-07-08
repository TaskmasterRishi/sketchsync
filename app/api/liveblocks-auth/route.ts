import { api } from "@/convex/_generated/api";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";
import { NextRequest, NextResponse } from "next/server";

const liveblocks = new Liveblocks({
  secret:"sk_dev_uGjiiNB20jzPuP6_6dhehmkGETEoOg6kbnrkHaWIFC-XXQpbMOs6VIIWooeHKo7W",
});

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(request: NextRequest) {
  const authorization = await auth();
  const user = await currentUser();

  console.log("Auth_info  :", {
    authorization,
    user,
  });

  if (!authorization || !user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { room } = await request.json();
  const board = await convex.query(api.board.get, { id: room });

  console.log("Auth_info  :", {
    room,
    board,
    boradOrgId : board?.orgId,
    userOrgId : authorization?.orgId,
  });

  if (board?.orgId !== authorization.orgId) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const userInfo = {
    name: user.firstName || "Team Member",
    picture: user.imageUrl,
  };

  console.log({userInfo});

  const session = liveblocks.prepareSession(user.id, { userInfo });

  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }

  const { status, body } = await session.authorize();

  console.log({status, body}, "Allowed")
  return new NextResponse(body, { status });
}
