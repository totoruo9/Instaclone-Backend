"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var SendMessageTypeDefs = (0, apollo_server_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Mutation {\n        sendMessage(userId: Int, payload:String!, roomId:Int): MutationResponse!\n    }\n"], ["\n    type Mutation {\n        sendMessage(userId: Int, payload:String!, roomId:Int): MutationResponse!\n    }\n"])));
exports.default = SendMessageTypeDefs;
var templateObject_1;
