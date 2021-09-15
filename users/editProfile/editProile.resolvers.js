import client from "../../client";
import bcrypt from "bcrypt";

const EditProfileResolvers = {
    Mutation: {
        editProfile: async (_,{
            firstName,
            lastName,
            username,
            email,
            password:newPassword
        }) => {
            let uglyPassword = null;
            if(newPassword){
                uglyPassword = await bcrypt.hash(newPassword, 10);
            };
            const updatedUser = await client.user.update({
                where:{
                    id:1
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