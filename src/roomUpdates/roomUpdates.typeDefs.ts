import { gql } from "apollo-server";

const RoomUpdateTypeDefs = gql`
    type Subscription {
        roomUpdates: Message
    }
`;

export default RoomUpdateTypeDefs;