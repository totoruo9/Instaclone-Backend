import client from "../../client";
import bcrypt from "bcrypt";
import { protectedResolver } from "../user.utils";

const resolverFn = async (
    _,
    {
        firstName,
        lastName,
        username,
        email,
        password:newPassword
    },
    {loggedInUser, portectResolver}
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
};

const EditProfileResolvers = {
    Mutation: {
        editProfile: protectedResolver(resolverFn),
    },
}

export default EditProfileResolvers;