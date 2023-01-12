"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const logger_1 = require("@aws-lambda-powertools/logger");
class Logger {
    constructor(serviceName, debug = false) {
        this.debugLogs = [];
        this.logger = new logger_1.Logger({ serviceName, logLevel: debug ? "debug" : "info" });
    }
    printDebugLogs() {
        this.debugLogs.forEach((log) => {
            this.log(log, "debug");
        });
    }
    log(message, level, error) {
        this.logger[level](message, error);
    }
    info(message) {
        this.log(message, "info");
    }
    warn(message) {
        this.log(message, "warn");
    }
    debug(message) {
        this.debugLogs.push(message);
    }
    error(message, error) {
        this.log(message, "error", error);
        this.printDebugLogs();
        this.debugLogs = [];
    }
}
exports.Logger = Logger;
