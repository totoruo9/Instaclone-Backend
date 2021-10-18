"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_utils_1 = require("../user.utils");
exports.default = {
    Query: {
        me: (0, user_utils_1.protectedResolver)(function (_, __, _a) {
            var loggedInUser = _a.loggedInUser, client = _a.client;
            return client.user.findUnique({
                where: {
                    id: loggedInUser.id
                }
            });
        })
    }
};
