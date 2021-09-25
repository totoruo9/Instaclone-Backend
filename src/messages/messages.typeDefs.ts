import { gql } from "apollo-server";

const MessagesTypeDefs = gql`
    type Message {
        id: Int!
        payload: String!
        user: User!
        room: Room!
        read: Boolean!
        createAt: String!
        updataAt: String!
    }
    type Room {
        id: Int!
        unreadTotal: Int!
        users: [User]
        messages(cursor: Int): [Message]
        createAt: String!
        updataAt: String!
    }
`;

export default MessagesTypeDefs;