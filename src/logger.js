"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor() {
        this.debugLogs = [];
    }
    info(message) {
        console.info(JSON.stringify({
            message,
            level: "info",
        }));
    }
    warn(message) {
        console.warn(JSON.stringify({
            message,
            level: "warn",
        }));
    }
    debug(message) {
        this.debugLogs.push({
            message,
            level: "debug",
        });
    }
    error(message) {
        console.error(JSON.stringify({
            message,
            level: "error",
        }));
        this.getDebugLogs();
        this.debugLogs = [];
    }
    getDebugLogs() {
        this.debugLogs.forEach((log) => {
            console.debug(JSON.stringify(log));
        });
    }
}
exports.Logger = Logger;
