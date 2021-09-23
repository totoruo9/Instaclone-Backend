import { gql } from "apollo-server";

const SeeHashtagTypeDefs = gql`
    type Query {
        seeHashtag(hashtag:String!): Hashtag
    }
`;

export default SeeHashtagTypeDefs;