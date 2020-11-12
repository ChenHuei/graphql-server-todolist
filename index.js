const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Todo {
    id: Int
    title: String
    description: String
    isCompleted: Boolean
  }

  type Query {
    list: [Todo]
  }  
`

const list = [
  {
    id: 1,
    title: 'todo 1',
    description: 'todo 1 description',
    isCompleted: false
  },
  {
    id: 2,
    title: 'todo 2',
    description: 'todo 2 description',
    isCompleted: true
  }
]

const resolvers = {
  Query: {
    list: () => list
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

