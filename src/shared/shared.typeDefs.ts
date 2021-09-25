import { gql } from "apollo-server";

const SharedTypeDefs = gql`
    type MutationResponse {
        ok: Boolean!
        error: String
    }
`;

export default SharedTypeDefs;