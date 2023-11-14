"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const models_1 = require("../models");
const findAllCategories = async () => {
    return await models_1.CategoryModel.find().lean();
};
exports.CategoryService = {
    findAllCategories,
};
