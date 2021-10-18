"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_utils_1 = require("../user.utils");
var SeeProfileResolvers = {
    Query: {
        seeProfile: (0, user_utils_1.protectedResolver)(function (_, _a, _b) {
            var username = _a.username;
            var client = _b.client;
            return client.user.findUnique({
                where: { username: username },
                include: {
                    following: true,
                    followers: true,
                }
            });
        })
    },
};
exports.default = SeeProfileResolvers;
