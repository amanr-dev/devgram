import { graph, config } from "@grafbase/sdk";

// Welcome to Grafbase!
//
// Configure authentication, data sources, resolvers and caching for your GraphQL API.

const g = graph.Standalone();

const User = g.type("User", {
  name: g.string(),
  email: g.string().unique(),
});

//    g.query('invoiceByNumber', {
//      args: { invoiceNumber: g.string() },
//      returns: g.ref(Invoice).list(),
//      resolver: 'invoice/byNumber',
//    })

export default config({
  schema: g,
});
