"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const services_1 = require("../services");
const core_1 = require("../core");
const createProduct = async (req, res, next) => {
    new core_1.SuccessResponse({
        message: "Create new product success!",
        metadata: await services_1.ProductService.createProduct(req.body),
    }).send(res);
};
const findAllProducts = async (req, res, next) => {
    new core_1.SuccessResponse({
        message: "Get list product success!",
        metadata: await services_1.ProductService.findAllProducts(req.query),
    }).send(res);
};
exports.ProductController = {
    createProduct,
    findAllProducts,
};
