import { gql } from "apollo-server";

const UploadPhotoTypeDefs = gql`
    type Mutation {
        uploadPhoto(file:String!, caption: String): Photo
    }
`;

export default UploadPhotoTypeDefs;