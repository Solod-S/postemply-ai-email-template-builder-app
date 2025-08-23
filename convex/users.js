import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateUser = mutation({
  args: { name: v.string(), email: v.string(), picture: v.string() },
  async handler(ctx, { name, email, picture }) {
    // Check if user already exists
    const existingUserResponse = await ctx.db
      .query("users")
      .filter(q => q.eq(q.field("email"), email))
      .first();
    // .withIndex("email", q => q.eq("email", email))
    // .first();

    if (existingUserResponse) {
      return existingUserResponse;
    }
    // If not, create a new user with 10 credits
    const newUserResponse = await ctx.db.insert("users", {
      name,
      email,
      picture,
      credits: 10,
    });

    return newUserResponse;
  },
});
