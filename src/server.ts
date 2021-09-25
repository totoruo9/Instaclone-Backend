require("dotenv").config();

import { createServer } from 'http';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { makeExecutableSchema } from '@graphql-tools/schema';

import express from "express";
import logger from "morgan";
import {ApolloServer} from "apollo-server-express";
import {typeDefs, resolvers} from "./schema";
import { graphqlUploadExpress } from "graphql-upload";
import client from "./client";
import { getUser } from "./users/user.utils";
import pubsub from "./pubsub";

console.log(pubsub);

const PORT = process.env.PORT;
const schema = makeExecutableSchema({typeDefs, resolvers});

const startServer = async() => {
    const apollo = new ApolloServer({
        schema,
        context: async({req}) => {
            return {
                ...(req && {loggedInUser: await getUser(req.headers.token)}),
                client,
            }
        },
        plugins: [{
            async serverWillStart(){
                return {
                    async drainServer() {
                        subscriptionServer.close();
                    }
                }
            }
        }]
    });

    await apollo.start();

    const app = express();
    app.use(logger("tiny"));
    app.use("/static",express.static("uploads"));
    app.use(graphqlUploadExpress());
    apollo.applyMiddleware({app});
    
    const httpServer = createServer(app);

    const subscriptionServer = SubscriptionServer.create({
        schema,
        execute,
        subscribe
    },{
        server: httpServer,
        path: apollo.graphqlPath
    })

    httpServer.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    });
}

startServer();
