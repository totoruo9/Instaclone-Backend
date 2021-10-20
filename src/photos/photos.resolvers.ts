import client from "../client";
import { Resolvers } from "../types";

const PhotosResolvers:Resolvers = {
    Photo: {
        user: ({userId},_,{client}) => {
            return client.user.findUnique({where:{id: userId}});
        },
        hashtags: ({id},_,{client}) => {
            return client.hashtag.findMany({where:{photos:{some:{id}}}})
        },
        likes: ({id}, _, {client}) => client.like.count({where:{photoId:id}}),
        comments: ({id}, _, {client}) => client.comment.count({where:{photoId:id}}),
        isMine: ({userId}, _, {loggedInUser}) => {
            if(!loggedInUser){
                return false
            }
            return loggedInUser.id === userId;
        },
        isLiked: async({id}, _, {loggedInUser, client}) => {
            if(!loggedInUser){
                return false
            }
            const ok = await client.like.findUnique({
                where:{
                    photoId_userId: {
                        photoId: id,
                        userId: loggedInUser.id
                    }
                },
                select: {
                    id: true
                }
            });
            if(ok){
                return true
            }
            return false
        }
    },
    Hashtag: {
        photos: ({id}, {page}, {client}) => {
            console.log(page)
            return client.hashtag.findUnique({where:{id}}).photos({
                take: 5,
                skip: (1-page)*5
            })
        },
        totalPhotos: ({id}, _, {client}) => client.photo.count({where:{
            hashtags:{
                some:{id}
            }
        }})
    },
}; 

export default PhotosResolvers;