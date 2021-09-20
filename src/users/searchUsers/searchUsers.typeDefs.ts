import { gql } from "apollo-server";

const searchUserTypeDefs = gql`
    type Query {
        searchUsers(keyword:String!): [User]
    }
`;

export default searchUserTypeDefs;