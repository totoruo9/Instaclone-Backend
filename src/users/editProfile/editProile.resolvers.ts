import { createWriteStream } from "fs";
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
                console.log(avatar, bio)
                let avatarUrl = null;
                if(avatar){
                    const {filename, createReadStream} = await avatar;
                    const newFilename = `${loggedInUser.id}-${Date.now()}-${filename}}`;
                    console.log(filename, createReadStream);
                    const readStream = createReadStream(process.cwd()+"/uploads/"+newFilename);
                    console.log(readStream);
                    const writeStream = createWriteStream("uploads");
                    readStream.pipe(writeStream);
                    avatarUrl = `http://localhost:4000/static/${newFilename}`;
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