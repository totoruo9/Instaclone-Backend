import { PrismaClient } from "@prisma/client";
import {ApolloServer, gql} from "apollo-server";

const client = new PrismaClient();

const typeDefs = gql`
    type Movie {
        id: Int!,
        title: String!, 
        year: Int!,
        genre: String,
        createdAt: String!,
        updateAt: String!
    }
    type Query{
        movies: [Movie]
        movie(id:Int!): Movie
    }
    type Mutation {
        createMovie(title: String!, year:Int!, genre:String): Movie,
        deleteMovie(id: Int!): Boolean,
    }
`;

const resolvers = {
    Query: {
        movies: () => client.movie.findMany(),
        movie: (_,{id}) => ({
            title: "hello",
            year: 2021
        })
    },
    Mutation: {
        createMovie: (_, {title, year, genre}) => {
            return client.movie.create({
                data:{
                    title,
                    year,
                    genre
                }
            })
        },
        deleteMovie: (_, {title}) => {
            console.log(title);
            return true;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(() => console.log("Server is running on http://localhost:4000"))