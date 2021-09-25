import { gql } from "apollo-server";

const UploadPhotoTypeDefs = gql`
    type Mutation {
        uploadPhoto(file: Upload!, caption: String): Photo
    }
`;

export default UploadPhotoTypeDefs;