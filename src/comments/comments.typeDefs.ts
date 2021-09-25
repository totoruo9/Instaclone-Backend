import { gql } from "apollo-server";

const CommentsTypeDefs = gql`
    type Comment {
        id: Int!
        user: User!
        photo: Photo!
        payload: String!
        isMine: Boolean!
        createAt: String!
        updateAt: String!
    }
`;

export default CommentsTypeDefs;