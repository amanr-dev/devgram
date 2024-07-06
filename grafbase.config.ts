import { graph, config } from "@grafbase/sdk";

// Welcome to Grafbase!
// Configure authentication, data sources, resolvers and caching for your GraphQL API.

const g = graph.Standalone();

const User = g.type("User", {
  name: g.string(),
  email: g.string(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.ref(Project),
});

const Project = g.type("Project", {
  title: g.string(),
});

export default config({
  graph: g,
});
