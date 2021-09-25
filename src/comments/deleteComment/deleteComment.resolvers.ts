import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/user.utils";

const DeleteCommentResolvers:Resolvers = {
    Mutation: {
        deleteComment: protectedResolver(
            async (_, {id}, {client, loggedInUser}) => {
                const comment = await client.comment.findUnique({
                    where: {id},
                    select: {userId: true}
                })

                if(!comment){
                    return {
                        ok: false,
                        error: "Not found Comment."
                    }
                } else if(comment.userId !== loggedInUser.id){
                    return {
                        ok: false,
                        error: "Not authorized."
                    }
                } else {
                    await client.comment.delete({
                        where: {id},
                    });
                    return {
                        ok: true
                    }
                }
            }
        )
    }
};

export default DeleteCommentResolvers;