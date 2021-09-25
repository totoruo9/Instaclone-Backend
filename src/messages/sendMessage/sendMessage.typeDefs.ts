import { gql } from "apollo-server";

const SendMessageTypeDefs = gql`
    type Mutation {
        sendMessage(userId: Int, payload:String!, roomId:Int): MutationResponse!
    }
`;

export default SendMessageTypeDefs;