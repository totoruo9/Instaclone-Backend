import bcrypt from "bcrypt";
import { Resolvers } from "../../types";
import { protectedResolver } from "../user.utils";

const EditProfileResolvers: Resolvers = {
    Mutation: {
        editProfile: protectedResolver(
            async (
                _,
                {
                    firstName,
                    lastName,
                    username,
                    email,
                    password:newPassword
                },
                {loggedInUser, client}
            ) => {
                let uglyPassword = null;
                if(newPassword){
                    uglyPassword = await bcrypt.hash(newPassword, 10);
                };
                const updatedUser = await client.user.update({
                    where:{
                        id: loggedInUser.id,
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
            }
        ),
    },
}

export default EditProfileResolvers;