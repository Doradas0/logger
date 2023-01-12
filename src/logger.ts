import { Logger as AWSLogger } from "@aws-lambda-powertools/logger";

export class Logger {
  private logger;

  constructor(serviceName: string) {
    this.logger = new AWSLogger({
      serviceName,
      logLevel: "debug"
    });
  }

  private debugLogs: string[] = [];

  private printDebugLogs() {
    this.debugLogs.forEach((log) => {
      this.log(log, "debug");
    });
  }

  private log(
    message: string,
    level: "info" | "warn" | "error" | "debug",
    error?: Error
  ) {
    this.logger[level](message, error as Error);
  }

  info(message: string) {
    this.log(message, "info");
  }

  warn(message: string) {
    this.log(message, "warn");
  }

  debug(message: string) {
    this.debugLogs.push(message);
  }

  error(message: string, error: Error) {
    this.log(message, "error", error);
    this.printDebugLogs();
    this.debugLogs = [];
  }
}
