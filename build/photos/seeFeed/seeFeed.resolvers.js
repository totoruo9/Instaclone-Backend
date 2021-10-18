"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_utils_1 = require("../../users/user.utils");
var SeeFeedResolvers = {
    Query: {
        seeFeed: (0, user_utils_1.protectedResolver)(function (_, __, _a) {
            var client = _a.client, loggedInUser = _a.loggedInUser;
            return client.photo.findMany({
                where: {
                    OR: [
                        {
                            user: {
                                followers: {
                                    some: {
                                        id: loggedInUser.id
                                    }
                                }
                            }
                        },
                        {
                            userId: loggedInUser.id
                        }
                    ]
                },
                orderBy: {
                    createAt: "desc"
                }
            });
        })
    }
};
exports.default = SeeFeedResolvers;
