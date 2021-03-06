"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var SeePhotoCommentsTypeDefs = (0, apollo_server_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Query {\n        seePhotoComments(id: Int!, page: Int!): [Comment]\n    }\n"], ["\n    type Query {\n        seePhotoComments(id: Int!, page: Int!): [Comment]\n    }\n"])));
exports.default = SeePhotoCommentsTypeDefs;
var templateObject_1;
