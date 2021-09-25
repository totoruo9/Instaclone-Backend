import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/user.utils";

const SeeRoomResolvers:Resolvers = {
    Query: {
        seeRoom: protectedResolver(
            async(_, {id}, {client, loggedInUser}) =>{
                return client.room.findFirst({
                    where: {
                        id,
                        users: {
                            some: {
                                id: loggedInUser.id
                            }
                        }
                    }
                })
            }
        )
    }
};

export default SeeRoomResolvers;