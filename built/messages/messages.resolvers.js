"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var MessagesResolvers = {
    Room: {
        users: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.room.findUnique({ where: { id: id } }).users();
        },
        messages: function (_a, _b, _c) {
            var id = _a.id;
            var cursor = _b.cursor;
            var client = _c.client;
            return client.message.findMany(__assign(__assign({ where: { roomId: id }, take: 5 }, (cursor && { skip: 1 })), (cursor && { cursor: { id: cursor } })));
        },
        unreadTotal: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client, loggedInUser = _b.loggedInUser;
            if (!loggedInUser) {
                return 0;
            }
            ;
            return client.message.count({
                where: {
                    read: false,
                    roomId: id,
                    user: {
                        id: {
                            not: loggedInUser.id
                        }
                    }
                }
            });
        }
    },
    Message: {
        user: function (_a, _, _b) {
            var id = _a.id;
            var client = _b.client;
            return client.message.findUnique({ where: { id: id } }).user();
        },
    }
};
exports.default = MessagesResolvers;
