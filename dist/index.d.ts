export declare class Logger {
    private logger;
    constructor(serviceName: string);
    private debugLogs;
    private printDebugLogs;
    private log;
    info(message: string, data?: any): void;
    warn(message: string, data?: any): void;
    debug(message: string, data?: any): void;
    error(message: string, error: Error, data?: any): void;
}
