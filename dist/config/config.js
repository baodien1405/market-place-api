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
Object.defineProperty(exports, "__esModule", { value: true });
exports.REFRESH_TOKEN = exports.ACCESS_TOKEN = exports.PORT = exports.MONGO_URI = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@market-place-api.kdiejtd.mongodb.net/?retryWrites=true&w=majority`;
exports.PORT = process.env.PORT || 8000;
exports.ACCESS_TOKEN = process.env.ACCESS_TOKEN || "";
exports.REFRESH_TOKEN = process.env.REFRESH_TOKEN || "";
const dev = {
    app: {
        port: process.env.DEV_APP_PORT,
    },
    db: {
        host: process.env.DEV_DB_HOST,
        port: process.env.DEV_DB_PORT,
        name: process.env.DEV_DB_NAME,
    },
};
const prod = {
    app: {
        port: process.env.PROD_APP_PORT,
    },
    db: {
        host: process.env.PROD_DB_HOST,
        port: process.env.PROD_DB_PORT,
        name: process.env.PROD_DB_NAME,
    },
};
const config = { dev, prod };
const env = process.env.NODE_ENV || "dev";
// export default config[env]
