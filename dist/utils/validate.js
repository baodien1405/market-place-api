"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMongoId = exports.isEmail = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// eslint-disable-next-line no-useless-escape
const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const isEmail = (email) => {
    return REGEX_EMAIL.test(email);
};
exports.isEmail = isEmail;
const isMongoId = (id) => mongoose_1.default.Types.ObjectId.isValid(id);
exports.isMongoId = isMongoId;
