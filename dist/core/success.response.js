"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATED = exports.OK = exports.SuccessResponse = void 0;
const constants_1 = require("../constants");
class SuccessResponse {
    constructor({ message = '', statusCode = constants_1.StatusCodes.OK, reasonStatusCode = constants_1.ReasonPhrases.OK, metadata = {} }) {
        this.message = !message ? reasonStatusCode : message;
        this.status = reasonStatusCode;
        this.code = statusCode;
        this.metadata = metadata;
    }
    send(res, headers = {}) {
        return res.status(this.code).json(this);
    }
}
exports.SuccessResponse = SuccessResponse;
class OK extends SuccessResponse {
    constructor({ message, metadata }) {
        super({ message, metadata });
    }
}
exports.OK = OK;
class CREATED extends SuccessResponse {
    constructor({ message, statusCode = constants_1.StatusCodes.CREATED, reasonStatusCode = constants_1.ReasonPhrases.CREATED, metadata }) {
        super({ message, statusCode, reasonStatusCode, metadata });
    }
}
exports.CREATED = CREATED;
