import { gql } from "apollo-server";

const seeFollowingTypeDefs = gql`
    type SeeFollowingResult {
        ok: Boolean!
        error: String
        following: [User]
    }

    type Query {
        seeFollowing(username:String!, cursor: Int): SeeFollowingResult
    }
`;

export default seeFollowingTypeDefs;