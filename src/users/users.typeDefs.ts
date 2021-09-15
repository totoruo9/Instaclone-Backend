import {gql} from "apollo-server";

const UsersTypeDefs = gql`
    type User {
        id: String!
        firstName: String!
        lastName: String
        username: String!
        email: String!
        createdAt: String!
        updatedAt: String!
    }
`;

export default UsersTypeDefs;