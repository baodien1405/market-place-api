"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
exports.default = async (app) => {
    app.use("/v1/api/products", routes_1.ProductRoute);
    app.use("/v1/api/categories", routes_1.CategoryRoute);
    return app;
};
