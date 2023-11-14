"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = exports.AuthFailureError = exports.UnprocessableEntityRequestError = exports.BadRequestError = exports.ForbiddenError = exports.ConflictRequestError = exports.ErrorResponse = void 0;
const constants_1 = require("../constants");
class ErrorResponse extends Error {
    constructor(message, status, code) {
        super(message);
        this.status = status;
        this.code = code;
    }
}
exports.ErrorResponse = ErrorResponse;
class ConflictRequestError extends ErrorResponse {
    constructor(message = constants_1.ReasonPhrases.CONFLICT, status = constants_1.ReasonPhrases.CONFLICT, code = constants_1.StatusCodes.CONFLICT) {
        super(message, status, code);
    }
}
exports.ConflictRequestError = ConflictRequestError;
class ForbiddenError extends ErrorResponse {
    constructor(message = constants_1.ReasonPhrases.FORBIDDEN, status = constants_1.ReasonPhrases.FORBIDDEN, code = constants_1.StatusCodes.FORBIDDEN) {
        super(message, status, code);
    }
}
exports.ForbiddenError = ForbiddenError;
class BadRequestError extends ErrorResponse {
    constructor(message = constants_1.ReasonPhrases.BAD_REQUEST, status = constants_1.ReasonPhrases.BAD_REQUEST, code = constants_1.StatusCodes.BAD_REQUEST) {
        super(message, status, code);
    }
}
exports.BadRequestError = BadRequestError;
class UnprocessableEntityRequestError extends ErrorResponse {
    constructor(message = constants_1.ReasonPhrases.UNPROCESSABLE_ENTITY, status = constants_1.ReasonPhrases.UNPROCESSABLE_ENTITY, code = constants_1.StatusCodes.UNPROCESSABLE_ENTITY) {
        super(message, status, code);
    }
}
exports.UnprocessableEntityRequestError = UnprocessableEntityRequestError;
class AuthFailureError extends ErrorResponse {
    constructor(message = constants_1.ReasonPhrases.UNAUTHORIZED, status = constants_1.ReasonPhrases.UNAUTHORIZED, code = constants_1.StatusCodes.UNAUTHORIZED) {
        super(message, status, code);
    }
}
exports.AuthFailureError = AuthFailureError;
class NotFoundError extends ErrorResponse {
    constructor(message = constants_1.ReasonPhrases.NOT_FOUND, status = constants_1.ReasonPhrases.NOT_FOUND, code = constants_1.StatusCodes.NOT_FOUND) {
        super(message, status, code);
    }
}
exports.NotFoundError = NotFoundError;
