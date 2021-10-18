"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var MessagesTypeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Message {\n        id: Int!\n        payload: String!\n        user: User!\n        room: Room!\n        read: Boolean!\n        createAt: String!\n        updataAt: String!\n    }\n    type Room {\n        id: Int!\n        unreadTotal: Int!\n        users: [User]\n        messages(cursor: Int): [Message]\n        createAt: String!\n        updataAt: String!\n    }\n"], ["\n    type Message {\n        id: Int!\n        payload: String!\n        user: User!\n        room: Room!\n        read: Boolean!\n        createAt: String!\n        updataAt: String!\n    }\n    type Room {\n        id: Int!\n        unreadTotal: Int!\n        users: [User]\n        messages(cursor: Int): [Message]\n        createAt: String!\n        updataAt: String!\n    }\n"])));
exports.default = MessagesTypeDefs;
var templateObject_1;
