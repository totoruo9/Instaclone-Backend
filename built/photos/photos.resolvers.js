"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotosResolvers = {
    Photo: {
        user: function (_a, _, _b) {
            var userId = _a.userId;
            var client = _b.client;
            return client.user.findUnique({ where: { id: userId } });
        },
        hashtags: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.hashtag.findMany({ where: { photos: { some: { id: id } } } });
        },
        likes: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.like.count({ where: { photoId: id } });
        },
        comments: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.comment.count({ where: { photoId: id } });
        },
        isMine: function (_a, _, _b) {
            var userId = _a.userId;
            var loggedInUser = _b.loggedInUser;
            if (!loggedInUser) {
                return false;
            }
            return loggedInUser.id === userId;
        }
    },
    Hashtag: {
        photos: function (_a, _b, _c) {
            var id = _a.id;
            var page = _b.page;
            var client = _c.client;
            console.log(page);
            return client.hashtag.findUnique({ where: { id: id } }).photos({
                take: 5,
                skip: (1 - page) * 5
            });
        },
        totalPhotos: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.photo.count({ where: {
                    hashtags: {
                        some: { id: id }
                    }
                } });
        }
    },
};
exports.default = PhotosResolvers;
