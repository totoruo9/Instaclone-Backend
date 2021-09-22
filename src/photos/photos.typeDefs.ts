import { gql } from "apollo-server";

const PhotoTypeDefs = gql`
    type Photo {
        id: String!
        user: User!
        userId: Int!
        file: String!
        caption: String
        createAt: String!
        updateAt: String!
        hashtags: [Hashtag]!
    }
    type Hashtag {
        id: String!
        hashtag: String!
        photos: [Photo]
        createAt: String!
        updateAt: String!
    }
`;

export default PhotoTypeDefs;