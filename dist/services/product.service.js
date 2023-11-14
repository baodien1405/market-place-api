"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const models_1 = require("../models");
const repositories_1 = require("../models/repositories");
const createProduct = async (payload) => {
    const { product_name, product_thumb, product_description, product_price, product_quantity, product_category, } = payload;
    const newProduct = await models_1.ProductModel.create({
        product_name,
        product_thumb,
        product_description,
        product_price,
        product_quantity,
        product_category,
    });
    return newProduct;
};
const findAllProducts = async ({ page = 1, limit = 30, search = "", category = "", price_max = 0, price_min = 0, sort_by = "", order = "", select = [
    "product_name",
    "product_thumb",
    "product_description",
    "product_price",
    "product_quantity",
    "product_category",
], }) => {
    return await repositories_1.ProductRepository.findAllProducts({
        limit,
        page,
        search,
        category,
        price_max,
        price_min,
        sort_by,
        order,
        select,
    });
};
exports.ProductService = {
    createProduct,
    findAllProducts,
};
