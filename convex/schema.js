import { EmailTemplateContext } from "@/context/EmailTemplateContext";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    picture: v.string(),
    credits: v.number(),
  }),
  emailTemplates: defineTable({
    tid: v.string(),
    design: v.any(), // Use v.any() for JSON data
    email: v.string(),
    description: v.string(),
    // createdAt: v.optional(v.date()),
    // updatedAt: v.optional(v.date()),
    // Add any other fields you need
  }),
});
