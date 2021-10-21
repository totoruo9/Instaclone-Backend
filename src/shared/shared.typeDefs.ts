import { gql } from "apollo-server";

const SharedTypeDefs = gql`
    type MutationResponse {
        ok: Boolean!
        error: String
        id: Int
    }
`;

export default SharedTypeDefs;