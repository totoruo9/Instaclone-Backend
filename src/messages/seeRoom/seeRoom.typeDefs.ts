import { gql } from "apollo-server";

const SeeRoomTypeDefs = gql`
    type Query {
        seeRoom(id:Int!): Room
    }
`;

export default SeeRoomTypeDefs;