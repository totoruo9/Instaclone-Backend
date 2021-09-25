import { Resolvers } from "../types";

const MessagesResolvers:Resolvers = {
    Room: {
        users: ({id}, _, {client}) => client.room.findUnique({where: {id}}).users(),
        messages: ({id}, {cursor}, {client}) => client.message.findMany({
            where: {roomId: id},
            take: 5,
            ...(cursor && {skip:1}),
            ...(cursor && {cursor:{id: cursor}})
        }),
        unreadTotal: ({id}, _, {client, loggedInUser}) => {
            if(!loggedInUser){
                return 0
            };
            return client.message.count({
                where:{
                    read: false,
                    roomId: id,
                    user: {
                        id: {
                            not: loggedInUser.id
                        }
                    }
                }
            })
        }
    }
};

export default MessagesResolvers;