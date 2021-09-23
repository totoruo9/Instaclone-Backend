import { gql } from "apollo-server";

const SearchPhotosTypeDefs = gql`
    type Query {
        searchPhotos(keyword: String!): [Photo]
    }
`;

export default SearchPhotosTypeDefs;