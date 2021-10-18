"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var PhotoTypeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Photo {\n        id: Int!\n        user: User!\n        userId: Int!\n        file: String!\n        caption: String\n        createAt: String!\n        updateAt: String!\n        hashtags: [Hashtag]\n        likes: Int!\n        isMine: Boolean!\n        comments: Int!\n    }\n    type Hashtag {\n        id: Int!\n        hashtag: String!\n        photos(page:Int!): [Photo]\n        totalPhotos: Int!\n        createAt: String!\n        updateAt: String!\n    }\n    type Like {\n        id: Int!\n        photo: Photo!\n        createAt: String!\n        updateAt: String!\n    }\n"], ["\n    type Photo {\n        id: Int!\n        user: User!\n        userId: Int!\n        file: String!\n        caption: String\n        createAt: String!\n        updateAt: String!\n        hashtags: [Hashtag]\n        likes: Int!\n        isMine: Boolean!\n        comments: Int!\n    }\n    type Hashtag {\n        id: Int!\n        hashtag: String!\n        photos(page:Int!): [Photo]\n        totalPhotos: Int!\n        createAt: String!\n        updateAt: String!\n    }\n    type Like {\n        id: Int!\n        photo: Photo!\n        createAt: String!\n        updateAt: String!\n    }\n"])));
exports.default = PhotoTypeDefs;
var templateObject_1;
