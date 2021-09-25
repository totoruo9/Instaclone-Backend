import { gql } from "apollo-server";

const seePhotoLikesTypeDefs = gql`
    type Query {
        seePhotoLikes(id:Int!): [User]
    }
`;

export default seePhotoLikesTypeDefs;