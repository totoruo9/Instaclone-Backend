import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/user.utils";
import { processHashtags } from "../photos.utils";

const EditPhotoResolvers:Resolvers = {
    Mutation: {
        editPhoto: protectedResolver(
            async(_,{id, caption}, {client, loggedInUser})=>{
                const oldPhoto = await client.photo.findFirst({
                    where:{
                        id,
                        userId:loggedInUser.id
                    },
                    include: {
                        hashtags: {
                            select: {
                                hashtag: true
                            }
                        }
                    }
                });

                if(!oldPhoto){
                    return {
                        ok:false,
                        error: "Photo no found."
                    }
                };

                const photo = await client.photo.update({
                    where:{id},
                    data: {
                        caption,
                        hashtags:{
                            disconnect: oldPhoto.hashtags,
                            connectOrCreate: processHashtags(caption),
                        }
                    }
                });

                return {
                    ok: true
                }
            }
        )
    }
};

export default EditPhotoResolvers;