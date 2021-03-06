"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var UploadPhotoTypeDefs = (0, apollo_server_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Mutation {\n        uploadPhoto(file: Upload!, caption: String): Photo\n    }\n"], ["\n    type Mutation {\n        uploadPhoto(file: Upload!, caption: String): Photo\n    }\n"])));
exports.default = UploadPhotoTypeDefs;
var templateObject_1;
