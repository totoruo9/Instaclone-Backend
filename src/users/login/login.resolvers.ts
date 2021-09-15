import bcrypt from "bcrypt";
import { Resolvers } from "../../types";
import jwt from "jsonwebtoken";

const LoginResolvers: Resolvers = {
    Mutation: {
        login: async(_, {username, password}, {client}) => {
            // find user with args.username
            const user = await client.user.findFirst({where:{username}});
            console.log(user);
            if(!user){
                return {
                    ok: false,
                    error: "User not found",
                }
            }

            // check password with args.password
            const passwordOk = await bcrypt.compare(password, user.password);
            if(!passwordOk){
                return {
                    ok: false,
                    error: "Incorrect password"
                }
            }

            // issue a token and send it to user
            const token = await jwt.sign({id:user.id}, process.env.SECREAT_KEY);
            return {
                ok: true,
                token,
            }
        }
    }
}

export default LoginResolvers;