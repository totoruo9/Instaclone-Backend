require("dotenv").config();
import express from "express";
import {ApolloServer} from "apollo-server-express";
import client from "./client";
import {typeDefs, resolvers} from "./schema";
import { getUser } from "./users/user.utils";
import { graphqlUploadExpress } from "graphql-upload";

const PORT = process.env.PORT;
const app = express();
const startServer = async() => {
    const server = new ApolloServer({
        resolvers,
        typeDefs,
        context: async({req}) => {
            return {
                loggedInUser: await getUser(req.headers.token),
                client
            }
        }
    });

    await server.start();
    app.use(graphqlUploadExpress());
    server.applyMiddleware({app});

    await app.listen(PORT);
    console.log(`Server is running on http://localhost:${PORT}`);
}

startServer();
