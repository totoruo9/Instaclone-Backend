const CommentResolvers = {
    Comment: {
        isMine: ({userId}, _, {loggedInUser}) => {
            if(!loggedInUser){
                return false
            }
            return loggedInUser.id === userId;
        }
    }
};

export default CommentResolvers;