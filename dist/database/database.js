"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceMongoDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config");
mongoose_1.default.set('strictQuery', true);
class Database {
    // constructor() {
    //   this.connect()
    // }
    async connect(type = 'mongodb') {
        try {
            await mongoose_1.default.connect(config_1.MONGO_URI, {
                maxPoolSize: 50
            });
            console.log('Number of connections::', mongoose_1.default.connections.length);
            console.log('Connect Database Success');
        }
        catch (error) {
            console.log('Error Connect!', error);
        }
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}
exports.instanceMongoDB = Database.getInstance();
