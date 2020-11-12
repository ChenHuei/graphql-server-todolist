const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: Int
    name: String!
    age: Int
    friends: [User]
  }

  type Query {
    users: [User]
  }  
`

const users = [
  {
    id: 1,
    name: 'leo',
    age: 20,
    friends: [2],
    height: 175,
    weight: 75
  },
  {
    id: 2,
    name: 'woody',
    age: 20,
    friends: [],
    height: 168,
    weight: 60
  }
]

const resolvers = {
  Query: {
    users: () => users
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

