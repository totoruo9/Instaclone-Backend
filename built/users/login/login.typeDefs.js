"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var LoginTypeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type LoginResult {\n        ok: Boolean!\n        token: String\n        error: String\n    }\n    \n    type Mutation {\n        login(username: String!, password: String!): LoginResult!\n    }\n"], ["\n    type LoginResult {\n        ok: Boolean!\n        token: String\n        error: String\n    }\n    \n    type Mutation {\n        login(username: String!, password: String!): LoginResult!\n    }\n"])));
exports.default = LoginTypeDefs;
var templateObject_1;
