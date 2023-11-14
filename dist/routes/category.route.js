"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoute = void 0;
const express_1 = __importDefault(require("express"));
const helpers_1 = require("../helpers");
const category_controller_1 = require("../controllers/category.controller");
const router = express_1.default.Router();
exports.CategoryRoute = router;
router.get("/", (0, helpers_1.asyncHandler)(category_controller_1.CategoryController.findAllCategories));
