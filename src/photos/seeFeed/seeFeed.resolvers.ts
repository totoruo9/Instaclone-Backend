import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/user.utils";

const SeeFeedResolvers:Resolvers = {
    Query: {
        seeFeed: protectedResolver(
            (_,__,{client, loggedInUser}) =>{
                return client.photo.findMany({
                    where:{
                        OR:[
                            {
                                user: {
                                    followers: {
                                        some: {
                                            id: loggedInUser.id
                                        }
                                    }
                                }
                            },
                            {
                                userId:loggedInUser.id
                            }
                        ]
                    },
                    orderBy: {
                        createAt:"desc"
                    }
                })
            }
        )
    }
}

export default SeeFeedResolvers;