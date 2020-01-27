const { GraphQLServer } = require('graphql-yoga')

// 1. The typeDefs constant defines your GraphQL schema.
// Here, it defines a simple Query type with one field called info. 
// This field has the type String!. The exclamation mark in the type 
// definition means that this field can never be null.
const typeDefs = `
type Query {
    info: String!
}
`

// 2. The resolvers object is the actual implementation of the GraphQL schema.
// Notice how its structure is identical to the structure of the type definition 
// inside typeDefs: Query.info.
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`
    }
}

// 3. the schema and resolvers are bundled and passed to the GraphQLServer which is 
// imported from graphql-yoga. This tells the server what API operations are accepted 
// and how they should be resolved.
const server = new GraphQLServer ({
    typeDefs,
    resolvers,
})
server.start(() => console.log(`Server is running on localhost:4000`))

// typeDefs: Ce sont les définitions de type de votre schéma d'application.

// resolvers: Il s'agit d'un objet JavaScript qui reflète les types Query, 
// Mutationet Subscriptionet leurs champs à partir de votre schéma d'application. 
// Chaque champ du schéma d'application est représenté par une fonction portant le même nom dans cet objet.

//context: Il s'agit d'un objet qui est transmis à travers la chaîne de résolveurs et chaque résolveur peut lire ou écrire dans.

// # Query for all users
// query {
//   users {
//     id --- ici on interroge id & name, possible d'en omettre 1 des 2
//     name
//   }
// }

// # Query a single user by their id
// query {
//   user(id: "user-1") {
//     id
//     name
//   }
// }

// # Create a new user
// mutation {
//   createUser(name: "Bob") {
//     id
//     name
//   }
// }

// Lorsque vous fournissez ces informations, 
// l'instance Prisma aura un accès complet à votre service de base de données 
// et peut être utilisée pour résoudre la demande entrante ultérieurement.