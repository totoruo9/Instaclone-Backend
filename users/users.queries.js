import client from "../client";

const UserQueries = {
    Query: {
        seeProfile: (_, {username}) => client.user.findUnique({
            where: {
                username
            }
        })
    },
}

export default UserQueries;