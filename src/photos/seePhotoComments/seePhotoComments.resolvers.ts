import { Resolvers } from "../../types";

const SeePhotoCommentResolvers:Resolvers = {
    Query: {
        seePhotoComments: (_, {id, page}, {client, loggedInUser}) => client.comment.findMany({
            where: {
                photoId: id
            },
            orderBy:{
                createAt: "asc"
            },
            take: 5,
            skip: (1-page)*5
        })
    }
};

export default SeePhotoCommentResolvers;