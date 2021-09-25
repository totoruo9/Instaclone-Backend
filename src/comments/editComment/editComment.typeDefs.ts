import { gql } from "apollo-server";

const EditCommentTypeDefs = gql`
    type Mutation {
        editComment(id: Int!, payload: String!): MutationResponse!
    }
`;

export default EditCommentTypeDefs;