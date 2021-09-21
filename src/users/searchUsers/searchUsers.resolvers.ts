import { Resolvers } from "../../types";

const SearchUsersResolvers:Resolvers = {
    Query: {
        searchUsers: async(_,{keyword, cursor}, {client}) =>{
            const users = await client.user.findMany(
                {
                    where:{
                        username:{
                            startsWith: keyword.toLowerCase(),
                        },
                    },
                    take:5,
                    skip: cursor ? 1 : 0,
                    ...(cursor && {cursor: {id: cursor}})
                },
            );


            return users;
        }
    }
};

export default SearchUsersResolvers
