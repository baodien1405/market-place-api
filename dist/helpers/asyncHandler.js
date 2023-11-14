"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = void 0;
// eslint-disable-next-line @typescript-eslint/ban-types
const asyncHandler = (func) => {
    return function (req, res, next) {
        func(req, res, next).catch(next);
    };
};
exports.asyncHandler = asyncHandler;
