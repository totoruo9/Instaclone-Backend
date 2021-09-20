import {gql} from "apollo-server";

const SeeProfileTypeDefs = gql`
    type Query {
        seeProfile(username: String): User
    }
`

export default SeeProfileTypeDefs;