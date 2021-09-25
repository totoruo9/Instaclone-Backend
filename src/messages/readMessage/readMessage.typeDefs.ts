import { gql } from "apollo-server";

const ReadMessageTypeDefs = gql`
    type Mutation{
        readMessage(id: Int!): MutationResponse!
    }
`;

export default ReadMessageTypeDefs;