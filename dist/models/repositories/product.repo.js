"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const constants_1 = require("../../constants");
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const findAllProducts = async ({ limit, page, search, category, price_max, price_min, sort_by, order, select, }) => {
    page = Number(page);
    limit = Number(limit);
    const skip = (page - 1) * limit;
    let condition = {};
    if (category) {
        condition.product_category = category;
    }
    if (price_max) {
        condition.product_price = {
            $lte: Number(price_max),
        };
    }
    if (price_min) {
        condition.product_price = condition.product_price
            ? { ...condition.product_price, $gte: Number(price_min) }
            : { $gte: Number(price_min) };
    }
    if (!constants_1.ORDER.includes(order)) {
        order = constants_1.ORDER[0];
    }
    if (!constants_1.SORT_BY.includes(sort_by)) {
        sort_by = constants_1.SORT_BY[0];
    }
    if (search) {
        condition.product_name = {
            $regex: search,
            $options: "i",
        };
    }
    const totalProductPromise = models_1.ProductModel.count();
    const productsPromise = models_1.ProductModel.find(condition)
        .populate({
        path: "product_category",
    })
        .sort({ [sort_by]: order === "desc" ? -1 : 1 })
        .skip(skip)
        .limit(limit)
        .select((0, utils_1.getSelectData)(select))
        .lean();
    const [totalProduct, products] = await Promise.all([
        totalProductPromise,
        productsPromise,
    ]);
    return {
        items: products,
        pagination: {
            page: page,
            limit: limit,
            totalRows: totalProduct,
        },
    };
};
exports.ProductRepository = {
    findAllProducts,
};
