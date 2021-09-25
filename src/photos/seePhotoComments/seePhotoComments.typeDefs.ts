import { gql } from "apollo-server";

const SeePhotoCommentsTypeDefs = gql`
    type Query {
        seePhotoComments(id: Int!, page: Int!): [Comment]
    }
`;

export default SeePhotoCommentsTypeDefs;