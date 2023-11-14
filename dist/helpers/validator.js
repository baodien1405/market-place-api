"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = exports.ValidationSource = void 0;
const core_1 = require("../core");
var ValidationSource;
(function (ValidationSource) {
    ValidationSource["BODY"] = "body";
    ValidationSource["HEADER"] = "headers";
    ValidationSource["QUERY"] = "query";
    ValidationSource["PARAM"] = "params";
})(ValidationSource = exports.ValidationSource || (exports.ValidationSource = {}));
const validator = (schema, source = ValidationSource.BODY) => {
    return (req, res, next) => {
        try {
            const { error } = schema.validate(req[source]);
            if (!error)
                return next();
            const { details } = error;
            const message = details.map((i) => i.message.replace(/['"]+/g, '')).join(',');
            next(new core_1.BadRequestError(message));
        }
        catch (error) {
            next(error);
        }
    };
};
exports.validator = validator;
