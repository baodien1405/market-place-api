"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const services_1 = require("../services");
const core_1 = require("../core");
const findAllCategories = async (req, res, next) => {
    new core_1.SuccessResponse({
        message: "Get list category success!",
        metadata: await services_1.CategoryService.findAllCategories(),
    }).send(res);
};
exports.CategoryController = {
    findAllCategories,
};
