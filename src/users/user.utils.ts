import jwt from "jsonwebtoken";
import client from "../client";
import { Resolver } from "../types";

export const getUser = async(token) => {
    try{
        if(!token){
            return null;
        }
        const {id} = await jwt.verify(token, process.env.SECREAT_KEY);
        const user = await client.user.findUnique({where:{id}});
        if(user) {
            return user;
        } else {
            return null;
        }
    }catch{
        return null;
    }
};

/* this is same to under 'protectedResolver' code -> this all is functional programming | function return function */
// export const protectedResolver = (ourResolver) => (root, args, context, info) => {
//     if(!context.loggedInUser){
//         return {
//             ok: false,
//             error: "Please log in to perform this action."
//         };
//     }
//     return ourResolver(root, args, context, info);
// }

export function protectedResolver(ourResolver: Resolver){
    return function(root, args, context, info){
        if(!context.loggedInUser){
            return {
                ok: false,
                error: "Please log in to perform this action."
            };
        }
        return ourResolver(root, args, context, info);
    }
}