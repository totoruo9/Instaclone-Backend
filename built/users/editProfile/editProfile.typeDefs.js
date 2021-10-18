"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var EditProfileTypeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    scalar Upload\n\n    type Mutation {\n        editProfile(\n            firstName: String\n            lastName: String\n            username: String\n            email: String\n            password: String\n            bio: String\n            avatar: Upload\n        ): MutationResponse!\n    }\n"], ["\n    scalar Upload\n\n    type Mutation {\n        editProfile(\n            firstName: String\n            lastName: String\n            username: String\n            email: String\n            password: String\n            bio: String\n            avatar: Upload\n        ): MutationResponse!\n    }\n"])));
exports.default = EditProfileTypeDefs;
var templateObject_1;
