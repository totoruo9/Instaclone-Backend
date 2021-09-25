import { gql } from "apollo-server";

const LikePhotoTypeDefs = gql`
    type Mutation {
        toggleLike(id:Int!):MutationResponse!
    }
`;

export default LikePhotoTypeDefs;