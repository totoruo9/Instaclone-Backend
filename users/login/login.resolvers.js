import bcrypt from "bcrypt";
import client from "../../client";
import jwt from "jsonwebtoken";

const LoginResolvers = {
    Mutation: {
        login: async(_, {username, password}) => {
            // find user with args.username
            const user = await client.user.findFirst({where:{username}});
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