import { Resolvers } from "../types";

const UserResolvers:Resolvers = {
    User: {
        totalFollowing: ({id},_,{client}) => client.user.count({where:{followers:{some:{id}}}}),
        totalFollowers: ({id},_,{client}) => client.user.count({where:{following:{some:{id}}}}),
        isMe: ({id}, _, {loggedInUser}) => {
            if(!loggedInUser){
                return false
            };
            return id === loggedInUser.id;
        },
        isFollowing: async ({id},_,{loggedInUser, client}) => {
            if(!loggedInUser){
                return false
            }
            const exists = await client.user.count({
                where:{
                    username: loggedInUser.username,
                    following: {
                        some: {
                            id
                        }
                    }
                },
            })
            return Boolean(exists);
        },
        photos: ({id}, {page=1}, {client}) => client.user.findUnique({where:{id}}).photos({
            take:5,
            skip:(1-page)*5
        })
    }
}

export default UserResolvers;