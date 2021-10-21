import {gql} from "apollo-server";

const UsersTypeDefs = gql`
    type User {
        id: Int!
        firstName: String!
        lastName: String
        username: String!
        email: String!
        createdAt: String!
        updatedAt: String!
        bio: String
        avatar: String
        photos(page:Int): [Photo]
        following: [User]
        followers: [User]
        totalFollowing: Int!
        totalFollowers: Int!
        isFollowing: Boolean!
        isMe: Boolean!
    }
`;

export default UsersTypeDefs;