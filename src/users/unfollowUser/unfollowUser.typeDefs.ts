import { gql } from "apollo-server";

const unfollowUserTypeDefs = gql`
    type Mutation {
        unfollowUser(username: String!): MutationResponse!
    }
`;

export default unfollowUserTypeDefs;