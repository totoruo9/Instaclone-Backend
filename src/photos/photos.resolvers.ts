import { Resolvers } from "../types";

const PhotosResolvers:Resolvers = {
    Photo: {
        user: ({userId},_,{client}) => {
            return client.user.findUnique({where:{id: userId}});
        },
        hashtags: ({id},_,{client}) => {
            return client.hashtag.findMany({where:{photos:{some:{id}}}})
        }
    }
};

export default PhotosResolvers;