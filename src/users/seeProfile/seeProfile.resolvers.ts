import { Resolvers } from "../../types";
import { protectedResolver } from "../user.utils";

const SeeProfileResolvers:Resolvers = {
    Query: {
        seeProfile: protectedResolver(
            (_, {username}, {client}) => client.user.findUnique({
                where: {
                    username
                }
            })
        )
    },
}

export default SeeProfileResolvers;