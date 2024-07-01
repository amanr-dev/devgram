import { graph, config } from "@grafbase/sdk";

// Welcome to Grafbase!
//
// Configure authentication, data sources, resolvers and caching for your GraphQL API.

const g = graph.Standalone();




type User @model {
  name: String!,
  email: String!,
  avatarUrl: URL,
  description: String!,
  githubUrl: URL
  linkedInUrl: URL
  projects: URL
 
}



//    g.query('invoiceByNumber', {
//      args: { invoiceNumber: g.String() },
//      returns: g.ref(Invoice).list(),
//      resolver: 'invoice/byNumber',
//    })

export default config({
  schema: g,
});
