import { gql } from "apollo-server";

const EditPhotoTypeDefs = gql`
    type Mutation {
        editPhoto(id: Int!, caption: String!):MutationResponse!
    }
`;

export default EditPhotoTypeDefs;