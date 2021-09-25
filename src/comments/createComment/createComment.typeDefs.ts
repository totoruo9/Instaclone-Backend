import { gql } from "apollo-server";

const CreateCommentTypedDefs = gql`
    type Mutation {
        createComment(photoId: Int!, payload: String!): MutationResponse!
    }
`;

export default CreateCommentTypedDefs;