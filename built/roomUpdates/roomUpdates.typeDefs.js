"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var RoomUpdateTypeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Subscription {\n        roomUpdates(id: Int!): Message\n    }\n"], ["\n    type Subscription {\n        roomUpdates(id: Int!): Message\n    }\n"])));
exports.default = RoomUpdateTypeDefs;
var templateObject_1;
