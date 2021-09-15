import client from "../../client";

const SeeProfileResolvers = {
    Query: {
        seeProfile: (_, {username}) => client.user.findUnique({
            where: {
                username
            }
        })
    },
}

export default SeeProfileResolvers;