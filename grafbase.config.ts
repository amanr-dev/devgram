import { graph, config } from "@grafbase/sdk";

const g = graph.Standalone();

const project = g.type("Project", {
  title: g.string(),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().shareable(),
  createdBy: g.ref(),
});

const user = g.type("User", {
  name: g.string(),
  email: g.string(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.ref(project),
});

export default config({
  graph: g,
});

// Example doc link
// https://grafbase.com/guides/mongodb
