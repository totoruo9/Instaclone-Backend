import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/user.utils";

const CreateCommentResolvers:Resolvers = {
    Mutation: {
        createComment: protectedResolver(
            async (_, {photoId, payload}, {client, loggedInUser}) => {
                const ok = await client.photo.findUnique({
                    where: {
                        id: photoId,
                    },
                    select:{
                        id: true
                    }
                });

                if(!ok){
                    return {
                        ok: false,
                        error: "Photo Not Found."
                    }
                };

                const newComment = await client.comment.create({
                    data: {
                        payload,
                        photo:{
                            connect: {
                                id: photoId
                            }
                        },
                        user: {
                            connect: {
                                id: loggedInUser.id
                            }
                        }
                    }
                });

                return {
                    ok: true,
                    id: newComment.id
                }
            }
        )
    }
};

export default CreateCommentResolvers;