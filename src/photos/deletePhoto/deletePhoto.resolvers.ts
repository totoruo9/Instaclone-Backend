import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/user.utils";

const DeletePhotoResolvers:Resolvers = {
    Mutation: {
        deletePhoto: protectedResolver(
            async (_, {id}, {client, loggedInUser}) => {
                const photo = await client.photo.findUnique({
                    where: {id},
                    select: {userId: true}
                });
                if(!photo){
                    return {
                        ok: false,
                        error: "Photo not found."
                    }
                } else if(photo.userId !== loggedInUser.id){
                    return {
                        ok: false,
                        error: "Not authorized"
                    };
                } else {
                    await client.photo.delete({
                        where: {
                            id
                        }
                    })
                    return {
                        ok: true
                    }
                }

            }
        )
    }
};

export default DeletePhotoResolvers;