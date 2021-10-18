"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var seeFollowersTypeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type seeFollowersResult{\n        ok: Boolean!\n        error: String\n        followers: [User]\n        totalPages: Int\n    }\n\n    type Query {\n        seeFollowers(username: String!, page: Int!): seeFollowersResult!\n    }\n"], ["\n    type seeFollowersResult{\n        ok: Boolean!\n        error: String\n        followers: [User]\n        totalPages: Int\n    }\n\n    type Query {\n        seeFollowers(username: String!, page: Int!): seeFollowersResult!\n    }\n"])));
exports.default = seeFollowersTypeDefs;
var templateObject_1;
