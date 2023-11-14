"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const helpers_1 = require("../helpers");
const router = express_1.default.Router();
exports.ProductRoute = router;
router.post("/", (0, helpers_1.asyncHandler)(controllers_1.ProductController.createProduct));
router.get("/", (0, helpers_1.asyncHandler)(controllers_1.ProductController.findAllProducts));
