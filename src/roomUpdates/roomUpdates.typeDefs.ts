import { gql } from "apollo-server";

const RoomUpdateTypeDefs = gql`
    type Subscription {
        roomUpdates(id: Int!): Message
    }
`;

export default RoomUpdateTypeDefs;