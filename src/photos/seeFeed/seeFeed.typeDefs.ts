import { gql } from "apollo-server";

const SeeFeedTypeDefs = gql`
    type Query {
        seeFeed: [Photo]
    }
`;

export default SeeFeedTypeDefs;