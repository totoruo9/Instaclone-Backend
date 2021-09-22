import { gql } from "apollo-server";

const PhotoTypeDefs = gql`
    type Photo {
        id: Int!
        user: User!
        userId: Int!
        file: String!
        caption: String
        createAt: String!
        updateAt: String!
        hashtags: [Hashtag]
    }
    type Hashtag {
        id: Int!
        hashtag: String!
        photos: [Photo]
        createAt: String!
        updateAt: String!
    }
`;

export default PhotoTypeDefs;