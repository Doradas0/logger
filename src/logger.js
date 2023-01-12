"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const logger_1 = require("@aws-lambda-powertools/logger");
class Logger {
    constructor(serviceName, debug = false) {
        this.debugLogs = [];
        this.logger = new logger_1.Logger({ serviceName, logLevel: debug ? "debug" : "info" });
    }
    getDebugLogs() {
        this.debugLogs.forEach((log) => {
            this.log(log.message, log.level);
        });
    }
    log(message, level) {
        const log = {
            message,
            level,
        };
        this.logger[level](JSON.stringify(log));
    }
    info(message) {
        this.log(message, "info");
    }
    warn(message) {
        this.log(message, "warn");
    }
    debug(message) {
        this.debugLogs.push({
            message,
            level: "debug",
        });
    }
    error(message) {
        this.log(message, "error");
        this.getDebugLogs();
        this.debugLogs = [];
    }
}
exports.Logger = Logger;
