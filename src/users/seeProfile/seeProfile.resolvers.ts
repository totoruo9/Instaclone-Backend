import { Resolvers } from "../../types";
import { protectedResolver } from "../user.utils";

const SeeProfileResolvers:Resolvers = {
    Query: {
        seeProfile: 
            (_, {username}, {client}) => client.user.findUnique({
                where: {username},
                include: {
                    following: true,
                    followers: true,
                }
            })
    },
}

export default SeeProfileResolvers;