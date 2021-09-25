import { gql } from "apollo-server";

const CreateCommentTypedDefs = gql`
    type CreateCommentResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        createComment(photoId: Int!, payload: String!): CreateCommentResult
    }
`;

export default CreateCommentTypedDefs;