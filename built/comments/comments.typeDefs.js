"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var CommentsTypeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Comment {\n        id: Int!\n        user: User!\n        photo: Photo!\n        payload: String!\n        isMine: Boolean!\n        createAt: String!\n        updateAt: String!\n    }\n"], ["\n    type Comment {\n        id: Int!\n        user: User!\n        photo: Photo!\n        payload: String!\n        isMine: Boolean!\n        createAt: String!\n        updateAt: String!\n    }\n"])));
exports.default = CommentsTypeDefs;
var templateObject_1;
