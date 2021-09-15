import bcrypt from "bcrypt";
import client from "../../client";

const CreateAccountResolvers = {
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
        }
    }
};

export default CreateAccountResolvers;