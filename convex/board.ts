import { v } from "convex/values";
import { mutation } from "./_generated/server";

const Images = [
  "placeholders/1.svg",
  "placeholders/2.svg",
  "placeholders/4.svg",
  "placeholders/5.svg",
  "placeholders/6.svg",
  "placeholders/7.svg",
  "placeholders/8.svg",
  "placeholders/9.svg",
  "placeholders/10.svg",
  "placeholders/11.svg",
  "placeholders/12.svg",
];

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unautorized User");
    }

    const randomImage = Images[Math.floor(Math.random() * Images.length)];
    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomImage,
    });
    return board;
  },
});

export const remove = mutation({
  args:{ id : v.id("boards")},
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unautorized User");
    }

    await ctx.db.delete(args.id);
  },
  
})

export const update = mutation({
  args: { id: v.id("boards"), 
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    const title = args.title.trim();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    if(!title){
      throw new Error("Title required");
    }

    if(title.length > 60){
      throw new Error("Title cann't be longer than 60 charaters");
    }

    const board =  await ctx.db.patch(args.id,{
      title: args.title
    });

    return board;

  }
});
