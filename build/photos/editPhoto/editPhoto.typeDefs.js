"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var EditPhotoTypeDefs = (0, apollo_server_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Mutation {\n        editPhoto(id: Int!, caption: String!):MutationResponse!\n    }\n"], ["\n    type Mutation {\n        editPhoto(id: Int!, caption: String!):MutationResponse!\n    }\n"])));
exports.default = EditPhotoTypeDefs;
var templateObject_1;
