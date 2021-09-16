import bcrypt from "bcrypt";
import { Resolvers } from "../../types";
import { protectedResolver } from "../user.utils";
import {GraphQLUpload} from "graphql-upload";

const EditProfileResolvers = {
    Upload: GraphQLUpload,
    Mutation: {
        editProfile: protectedResolver(
            async (
                _,
                {
                    firstName,
                    lastName,
                    username,
                    email,
                    password:newPassword,
                    bio,
                    avatar
                },
                {loggedInUser, client}
            ) => {
                console.log(avatar);
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
                        bio,
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