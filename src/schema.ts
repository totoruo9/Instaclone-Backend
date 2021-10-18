import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import {makeExecutableSchema} from "graphql-tools";

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.*`);
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.*`);

export const typeDefs = mergeTypeDefs(loadedTypes);
export const resolvers = mergeResolvers(loadedResolvers);

// const schema = makeExecutableSchema({typeDefs, resolvers});