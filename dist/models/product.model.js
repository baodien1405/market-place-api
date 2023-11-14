"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const slugify_1 = __importDefault(require("slugify"));
const mongoose_1 = __importStar(require("mongoose"));
const DOCUMENT_NAME = "Product";
const COLLECTION_NAME = "products";
const productSchema = new mongoose_1.default.Schema({
    product_name: { type: String, required: true },
    product_thumb: { type: String, required: true },
    product_description: { type: String, required: true },
    product_slug: { type: String },
    product_price: { type: Number, required: true },
    product_quantity: { type: Number, required: true },
    product_category: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category" },
}, {
    collection: COLLECTION_NAME,
    timestamps: true,
});
// create index for search
productSchema.index({ product_name: "text", product_description: "text" });
// run before .save() and .create()
productSchema.pre("save", function (next) {
    this.product_slug = (0, slugify_1.default)(this.product_name, { lower: true });
    next();
});
exports.ProductModel = mongoose_1.default.model(DOCUMENT_NAME, productSchema);
