import { gql } from "apollo-server";

const DeletePhotoTypeDefs = gql`
    type Mutation {
        deletePhoto(id: Int!): MutationResponse!
    }
`;

export default DeletePhotoTypeDefs;