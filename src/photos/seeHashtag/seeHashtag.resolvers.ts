import { Resolvers } from "../../types";

const SeeHashtagResolvers:Resolvers = {
    Query: {
        seeHashtag: (_,{hashtag}, {client}) => client.hashtag.findUnique(
            {
                where:{hashtag}
            }
        )
    }
};

export default SeeHashtagResolvers;