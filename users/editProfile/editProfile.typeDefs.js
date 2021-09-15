import { gql } from "apollo-server";

const EditProfileTypeDefs = gql`
    type EditProfileResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        editProfile(
            firstName: String
            lastName: String
            username: String
            email: String
            password: String
        ): EditProfileResult
    }
`;

export default EditProfileTypeDefs;