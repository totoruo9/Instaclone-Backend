import {gql} from "apollo-server";

const SeeProfileTypeDefs = gql`
    type User {
        id: String!
        firstName: String!
        lastName: String
        username: String!
        email: String!
        createdAt: String!
        updatedAt: String!
    }
    type Query {
        seeProfile(username: String): User
    }
`

export default SeeProfileTypeDefs;