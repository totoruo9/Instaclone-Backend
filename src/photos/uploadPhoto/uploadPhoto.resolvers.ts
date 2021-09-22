import client from "../../client";
import { Resolvers } from "../../types";
import {protectedResolver} from "../../users/user.utils"

const UploadPhotoResolvers:Resolvers = {
    Mutation :{
        uploadPhoto: protectedResolver(
            async(_,{file, caption}, {client, loggedInUser}) => {
                let hashtagObj = [];
                // parse caption
                if(caption){
                    const hashtags = caption.match(/#[\d|A-Z|a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/g);
                    hashtagObj = hashtags.map((hashtag) => ({
                        where: {hashtag},
                        create: {hashtag}
                    }));
                    console.log(hashtagObj);
                }
                // get or create Hashtags
                return client.photo.create({
                    data: {
                        file,
                        caption,
                        user: {
                            connect:{
                                id: loggedInUser.id
                            }
                        },
                        ...(hashtagObj.length > 0 && {
                            hashtags: {
                                connectOrCreate: hashtagObj,
                            }
                        }),
                    }
                })
                // save the photo with the parsed hashtags
                // add the photo to the hashtags
            }
        )
    }
};

export default UploadPhotoResolvers;