import { Resolvers } from "../../types";

const seeFollowingResolvers:Resolvers = {
    Query: {
        seeFollowing: async(_,{username, cursor}, {client}) => {
            const ok = await client.user.findUnique({where:{username}, select: {id: true}});
            if(!ok){
                return{
                    ok: false,
                    error: "User not found"
                }
            };

            /* Cursor Base PageNation */
            const following = await client.user
                .findUnique({where:{username}})
                .following({
                    take:5,
                    ...(cursor && {skip:1}),
                    ...(cursor && {cursor: {id:cursor}}),
                });
            return {
                ok: true,
                following
            }
        }
    }
}

export default seeFollowingResolvers;