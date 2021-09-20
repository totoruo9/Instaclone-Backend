require("dotenv").config();
import express from "express";
import logger from "morgan";
import {ApolloServer} from "apollo-server-express";
import {typeDefs, resolvers} from "./schema";
import { graphqlUploadExpress } from "graphql-upload";
import client from "./client";
import { getUser } from "./users/user.utils";


const PORT = process.env.PORT;


const startServer = async() => {
    const apollo = new ApolloServer({
        resolvers,
        typeDefs,
        context: async({req}) => {
            return {
                loggedInUser: await getUser(req.headers.token),
                client
            }
        }
    });

    await apollo.start();

    const app = express();
    app.use(logger("tiny"));
    app.use("/static",express.static("uploads"));
    app.use(graphqlUploadExpress());
    apollo.applyMiddleware({app});

    app.listen({port: PORT}, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    });
}

startServer();
