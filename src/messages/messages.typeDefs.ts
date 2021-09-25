import { gql } from "apollo-server";

const MessagesTypeDefs = gql`
    type Messages {
        id: Int!
        payload: String!
        user: User!
        room: Room!
        createAt: String!
        updataAt: String!
    }
    type Room {
        id: Int!
        user: [User]
        messages: [Messages]
        createAt: String!
        updataAt: String!
    }
`;

export default MessagesTypeDefs;