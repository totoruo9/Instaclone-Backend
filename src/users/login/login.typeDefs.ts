import {gql} from "apollo-server";

const LoginTypeDefs = gql`
    type LoginResult {
        ok: Boolean!
        token: String
        error: String
    }
    
    type Mutation {
        login(username: String!, password: String!): LoginResult!
    }
`

export default LoginTypeDefs;