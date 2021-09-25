import { gql } from "apollo-server";

const SeeRoomTypeDefs = gql`
    type Query {
        seeRooms: [Room]
    }
`;

export default SeeRoomTypeDefs;