import { createWriteStream } from "fs";
import bcrypt from "bcrypt";
import { Resolvers } from "../../types";
import { protectedResolver } from "../user.utils";
import {GraphQLUpload} from "graphql-upload";
import { uploadToS3 } from "../../shared/shared.utils";

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
                console.log(avatar, bio)
                let avatarUrl = null;
                if(avatar){
                    avatarUrl = await uploadToS3(avatar, loggedInUser.id, "avatars");
                    // const {filename, createReadStream} = await avatar;
                    // const newFilename = `${loggedInUser.id}-${Date.now()}-${filename}`;
                    // const readStream = createReadStream(process.cwd()+"/uploads/"+newFilename);
                    // const writeStream = createWriteStream(process.cwd() + "/uploads/" + newFilename);
                    // readStream.pipe(writeStream);
                    // avatarUrl = `http://localhost:4000/static/${newFilename}`;
                }

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
                        ...(avatarUrl && {avatar: avatarUrl})
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