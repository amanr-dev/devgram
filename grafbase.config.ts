import { graph, config } from "@grafbase/sdk";

// Welcome to Grafbase!
// Configure authentication, data sources, resolvers and caching for your GraphQL API.

const g = graph.Standalone();

const User = g.type("User", {
  name: g.string(),
});

export default config({});
