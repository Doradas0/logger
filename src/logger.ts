import { Logger as AWSLogger } from "@aws-lambda-powertools/logger";

interface log {
  message: string;
  level: "info" | "warn" | "error" | "debug";
  error?: any;
  data?: any;
}

export class Logger {
  private logger: AWSLogger;

  constructor(serviceName: string) {
    this.logger = new AWSLogger({
      serviceName,
      logLevel: "debug",
    });
  }

  private debugLogs: log[] = [];

  private printDebugLogs() {
    this.debugLogs.forEach((log) => {
      const { message, level, data } = log;
      this.log({ message, level, data });
    });
  }

  private log(log: log) {
    this.logger[log.level](log.message, log.data, log.error as Error);
  }

  info(message: string, data?: any) {
    this.log({ message, level: "info", data });
  }

  warn(message: string, data?: any) {
    this.log({ message, level: "warn", data });
  }

  debug(message: string, data?: any) {
    const dataToLog = { ...data, timestamp: new Date().toISOString() };
    this.debugLogs.push({ message, level: "debug", data: dataToLog });
  }

  error(message: string, error: any, data?: any) {
    this.log({ message, level: "error", error, data });
    this.printDebugLogs();
    this.debugLogs = [];
  }
}
