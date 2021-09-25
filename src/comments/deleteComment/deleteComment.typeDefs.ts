import { gql } from "apollo-server";

const DeleteCommentTypeDefs = gql`
    type Mutation {
        deleteComment(id: Int!): MutationResponse!
    }
`;

export default DeleteCommentTypeDefs;