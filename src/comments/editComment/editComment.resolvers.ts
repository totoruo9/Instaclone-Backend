import { protectedResolver } from "../../users/user.utils";

const EditCommentResolvers = {
    Mutation:{
        editComment: protectedResolver(
            async (_, {id, payload}, {client, loggedInUser}) => {
                const comment = await client.comment.findUnique({
                    where: {id},
                    select: {userId: true}
                });
                if(!comment){
                    return {
                        ok: false,
                        error: "Not found comment."
                    }
                } else if(comment.userId !== loggedInUser.id){
                    return {
                        ok: false,
                        error: "Not authorized."
                    }
                } else {
                    await client.comment.update({
                        where: {id},
                        data: {
                            payload
                        }
                    });
                    return {
                        ok: true
                    }
                }
            }
        )
    }
};

export default EditCommentResolvers;