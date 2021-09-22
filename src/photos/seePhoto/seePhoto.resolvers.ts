import { Resolvers } from "../../types";

const SeePhotoResolvers:Resolvers = {
    Query: {
        seePhoto: (_,{id}, {client}) =>{
            return client.photo.findUnique({where:{id}});
        }
    }
}

export default SeePhotoResolvers;