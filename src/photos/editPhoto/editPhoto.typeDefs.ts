import { gql } from "apollo-server";

const EditPhotoTypeDefs = gql`
    type EditPhotoResult{
        ok: Boolean!
        error: String
    }
    type Mutation {
        editPhoto(id: Int!, caption: String!):EditPhotoResult!
    }
`;

export default EditPhotoTypeDefs;