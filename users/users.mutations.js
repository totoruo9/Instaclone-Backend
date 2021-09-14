import client from "../client";

const UserMutarions = {
    Mutation: {
        createAccount: async (_, {
            firstName,
            lastName,
            username,
            email,
            password
        }) => {
            // check if username or email are alreay on DB.
            const existingUser = await client.user.findFirst({
                where: {
                    OR: [{username},{email}]
                }
            })
            console.log(existingUser);
            // hash password

            // save amd return the user
        }
    }
}

export default UserMutarions;