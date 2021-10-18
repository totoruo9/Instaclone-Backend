"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var seeFollowingTypeDefs = (0, apollo_server_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type SeeFollowingResult {\n        ok: Boolean!\n        error: String\n        following: [User]\n    }\n\n    type Query {\n        seeFollowing(username:String!, cursor: Int): SeeFollowingResult\n    }\n"], ["\n    type SeeFollowingResult {\n        ok: Boolean!\n        error: String\n        following: [User]\n    }\n\n    type Query {\n        seeFollowing(username:String!, cursor: Int): SeeFollowingResult\n    }\n"])));
exports.default = seeFollowingTypeDefs;
var templateObject_1;
