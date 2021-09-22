import { gql } from "apollo-server";

const SeePhotoTypeDefs = gql`
    type Query {
        seePhoto(id:Int!): Photo
    }
`;

export default SeePhotoTypeDefs;