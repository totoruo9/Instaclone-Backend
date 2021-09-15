import { gql } from "apollo-server";

const CreateAccountTypeDefs = gql`
    type CreateAccountResult {
        ok: Boolean!
        error: String
    }
    
    type Mutation {
        createAccount(
            firstName: String!
            lastName: String
            username: String!
            email: String!
            password: String!
        ):CreateAccountResult
    }
`;

export default CreateAccountTypeDefs;