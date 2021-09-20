import { Resolvers } from "../../types";
import { protectedResolver } from "../user.utils";

const UnfollowUserResolvers: Resolvers = {
    Mutation: {
        unfollowUser: protectedResolver(
            async (_, {username}, {loggedInUser, client}) => {
                const ok = await client.user.findUnique({where: {username}});

                if(!ok){
                    return {
                        ok: false,
                        error: "Can't unfollow user."
                    }
                };

                await client.user.update({
                    where:
                        {id: loggedInUser.id},
                    data: {
                        following: {disconnect: {username}}
                    }
                });

                return {
                    ok: true
                }
            }
        )
    }
}

export default UnfollowUserResolvers;