"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor() {
        this.debugLogs = [];
    }
    info(message) {
        console.log(JSON.stringify({
            message,
            level: "info",
        }));
    }
    debug(message) {
        this.debugLogs.push({
            message,
            level: "debug",
        });
    }
    error(message) {
        console.log(JSON.stringify({
            message,
            level: "error",
        }));
        this.getDebugLogs();
        this.debugLogs = [];
    }
    getDebugLogs() {
        this.debugLogs.forEach((log) => {
            console.log(JSON.stringify(log));
        });
    }
}
exports.Logger = Logger;
