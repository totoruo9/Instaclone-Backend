import { Resolvers } from "../../types";

const SearchUsersResolvers:Resolvers = {
    Query: {
        searchUsers: async(_,{keyword}, {client}) =>{
            const users = await client.user.findMany({where:{
                username:{
                    startsWith: keyword.toLowerCase(),
                }
            }})
            return users;
        }
    }
};

export default SearchUsersResolvers
