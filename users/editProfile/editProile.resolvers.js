import client from "../../client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const EditProfileResolvers = {
    Mutation: {
        editProfile: async (_,{
            firstName,
            lastName,
            username,
            email,
            password:newPassword,
            token
        }) => {
            const {id} = await jwt.verify(token, process.env.SECREAT_KEY);

            let uglyPassword = null;
            if(newPassword){
                uglyPassword = await bcrypt.hash(newPassword, 10);
            };
            const updatedUser = await client.user.update({
                where:{
                    id
                },
                data:{
                    firstName,
                    lastName,
                    email,
                    username,
                    ...(uglyPassword && {password: uglyPassword}),
                }
            });
            if(updatedUser.id){
                return {
                    ok: true
                };
            }else {
                return {
                    ok: false,
                    error: "Could not update profile"
                };
            };
        },
    }
}

export default EditProfileResolvers;