import { graph, config } from "@grafbase/sdk";

// Welcome to Grafbase!
//
// Configure authentication, data sources, resolvers and caching for your GraphQL API.

const g = graph.Standalone();

const User = g.type("User", {
  name: g.string(),
  email: g.string(),
  avatarUrl: g.url(),
});

export default config({
  schema: g,
});

import {
  createSchema,
  string,
  int,
  boolean,
  datetime,
  ref,
} from "@grafbase/schema";

// Define the Author model
const Author = createSchema("Author", {
  name: string().required(),
  email: string().required().unique(),
  bio: string().optional(),
  posts: ref("Post").list().optional(),
});

// Define the Post model
const Post = createSchema("Post", {
  title: string().required(),
  content: string().required(),
  published: boolean().default(false),
  publishedAt: datetime().optional(),
  author: ref("Author").required(),
});

// Export the schema
export default createSchema({
  models: [Author, Post],
});
