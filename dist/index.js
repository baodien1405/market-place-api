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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv = __importStar(require("dotenv"));
const config_1 = require("./config");
const database_1 = require("./database");
const app_1 = __importDefault(require("./app"));
const core_1 = require("./core");
dotenv.config();
const DELAY = 0;
const StartServer = async () => {
    const app = (0, express_1.default)();
    app.use(function (req, res, next) {
        setTimeout(next, DELAY);
    });
    // CACHE for GET requests
    // app.use(function (req, res, next) {
    //   const period = 60 * 5
    //   if (req.method == 'GET') {
    //     res.set("Cache-control", `public, max-age=${period}`)
    //   } else {
    //     res.set("Cache-control", "no-store")
    //   }
    //   next()
    // })
    app.use((0, morgan_1.default)('dev'));
    app.use((0, helmet_1.default)());
    app.use((0, compression_1.default)());
    app.use((0, cookie_parser_1.default)());
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    await database_1.instanceMongoDB.connect();
    await (0, app_1.default)(app);
    // Handling error
    app.use((req, res, next) => {
        const error = new core_1.ErrorResponse('Not Found', 'Not Found', 404);
        next(error);
    });
    app.use((error, req, res, next) => {
        const statusCode = error.code || 500;
        return res.status(statusCode).json({
            status: error.status,
            code: statusCode,
            stack: error.stack,
            message: error.message || 'Internal Server Error'
        });
    });
    app.listen(config_1.PORT, () => {
        console.log(`Listening to the port ${config_1.PORT}`);
    });
};
StartServer();
