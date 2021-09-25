import { gql } from "apollo-server";

const CreateAccountTypeDefs = gql`
    type Mutation {
        createAccount(
            firstName: String!
            lastName: String
            username: String!
            email: String!
            password: String!
        ):MutationResponse!
    }
`;

export default CreateAccountTypeDefs;