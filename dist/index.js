"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const logger_1 = require("@aws-lambda-powertools/logger");
class Logger {
    logger;
    constructor(serviceName) {
        this.logger = new logger_1.Logger({
            serviceName,
            logLevel: "debug",
        });
    }
    debugLogs = [];
    printDebugLogs() {
        this.debugLogs.forEach((log) => {
            const { message, level } = log;
            this.log({ message, level });
        });
    }
    log(log) {
        this.logger[log.level](log.message, { ...log.data }, log.error);
    }
    info(message, data) {
        this.log({ message, level: "info", data });
    }
    warn(message, data) {
        this.log({ message, level: "warn", data });
    }
    debug(message, data) {
        this.debugLogs.push({ message, level: "debug", data });
    }
    error(message, error, data) {
        this.log({ message, level: "error", error, data });
        this.printDebugLogs();
        this.debugLogs = [];
    }
}
exports.Logger = Logger;
