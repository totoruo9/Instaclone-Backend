import { gql } from "apollo-server";

const searchUserTypeDefs = gql`
    type Query {
        searchUsers(keyword:String!, cursor:Int): [User]
    }
`;

export default searchUserTypeDefs;