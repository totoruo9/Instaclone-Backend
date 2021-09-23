import { Resolvers } from "../../types";

const SearchResovlers:Resolvers = {
    Query: {
        searchPhotos: (_,{keyword},{client}) => client.photo.findMany({where:{caption:{startsWith:keyword}}})
    }
};

export default SearchResovlers;