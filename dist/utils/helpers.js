"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNestedObjectParser = exports.removeNullAndUndefined = exports.getUnSelectData = exports.getSelectData = exports.getInfoData = exports.validatePassword = exports.generatePassword = exports.generateSalt = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const pick_1 = __importDefault(require("lodash/pick"));
const generateSalt = async () => {
    return await bcrypt_1.default.genSalt();
};
exports.generateSalt = generateSalt;
const generatePassword = async (password, salt) => {
    return await bcrypt_1.default.hash(password, salt);
};
exports.generatePassword = generatePassword;
const validatePassword = async (enteredPassword, savedPassword, salt) => {
    const encryptEnteredPassword = await (0, exports.generatePassword)(enteredPassword, salt);
    return encryptEnteredPassword === savedPassword;
};
exports.validatePassword = validatePassword;
const getInfoData = ({ fields = [], object = {} }) => {
    return (0, pick_1.default)(object, fields);
};
exports.getInfoData = getInfoData;
const getSelectData = (select) => {
    return Object.fromEntries(select.map((item) => [item, 1]));
};
exports.getSelectData = getSelectData;
const getUnSelectData = (unselect) => {
    return Object.fromEntries(unselect.map((item) => [item, 0]));
};
exports.getUnSelectData = getUnSelectData;
const removeNullAndUndefined = (obj) => {
    Object.keys(obj).forEach((k) => {
        if (obj[k] === null || obj[k] === undefined) {
            delete obj[k];
        }
    });
    return obj;
};
exports.removeNullAndUndefined = removeNullAndUndefined;
const updateNestedObjectParser = (obj) => {
    const final = {};
    Object.keys(obj || {}).forEach((k) => {
        if (typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
            const response = (0, exports.updateNestedObjectParser)(obj[k]);
            Object.keys(response || {}).forEach((a) => {
                final[`${k}.${a}`] = response[a];
            });
        }
        else {
            final[k] = obj[k];
        }
    });
    return final;
};
exports.updateNestedObjectParser = updateNestedObjectParser;
