import bcrypt from "bcrypt";
import client from "../client";
import jwt from "jsonwebtoken";

const UserMutarions = {
    Mutation: {
        createAccount: async (_, {
            firstName,
            lastName,
            username,
            email,
            password
        }) => {
            try{
                // check if username or email are alreay on DB.
                const existingUser = await client.user.findFirst({
                    where: {
                        OR: [{username},{email}]
                    }
                });
                
                if(existingUser){
                    throw new Error("This username/password is alreay taken");
                }

                // hash password
                const uglyPassword = await bcrypt.hash(password, 10);

                // save amd return the user
                return client.user.create({data:{
                    username, email, firstName, lastName, password: uglyPassword
                }})
            }catch(error){
                return error
            }
        },
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

export default UserMutarions;