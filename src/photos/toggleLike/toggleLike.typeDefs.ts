import { gql } from "apollo-server";

const LikePhotoTypeDefs = gql`
    type LikePhotoResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        toggleLike(id:Int!):LikePhotoResult!
    }
`;

export default LikePhotoTypeDefs;