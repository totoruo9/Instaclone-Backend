"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SeePhotoCommentResolvers = {
    Query: {
        seePhotoComments: function (_, _a, _b) {
            var id = _a.id, page = _a.page;
            var client = _b.client, loggedInUser = _b.loggedInUser;
            return client.comment.findMany({
                where: {
                    photoId: id
                },
                orderBy: {
                    createAt: "asc"
                },
                take: 5,
                skip: (1 - page) * 5
            });
        }
    }
};
exports.default = SeePhotoCommentResolvers;
