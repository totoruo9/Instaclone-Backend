import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/user.utils";

const SeeRooomResolvers:Resolvers = {
    Query: {
        seeRooms: protectedResolver(
            async(_, __, {client, loggedInUser}) =>
                client.room.findMany({
                    where: {
                        users: {
                            some: {
                                id: loggedInUser.id
                            }
                        }
                    }
                })
        )
    }
}

export default SeeRooomResolvers;