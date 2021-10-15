import { protectedResolver } from "../user.utils";

export default {
    Query: {
        me: protectedResolver(
            (_, __, {loggedInUser, client}) => {
                return client.user.findUnique({
                    where: {
                        id:loggedInUser.id
                    }
                });
            }
        )
    }
}