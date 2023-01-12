import { Logger as AWSLogger } from '@aws-lambda-powertools/logger';

interface Log {
  message: string;
  level: "info" | "warn" | "error" | "debug";
}

export class Logger {
  private logger;
  constructor(serviceName: string, debug: boolean = false) {
    this.logger = new AWSLogger({serviceName, logLevel: debug ? "debug" : "info"});
  }

  private debugLogs: Log[] = [];

  private getDebugLogs() {
    this.debugLogs.forEach((log) => {
      this.log(log.message, log.level);
    });
  }

  private log(message: string, level: "info" | "warn" | "error" | "debug") {
    const log: Log = {
      message,
      level,
    };
    this.logger[level](JSON.stringify(log));
  }

  info(message: string) {
    this.log(message, "info");
  }

  warn(message: string) {
    this.log(message, "warn");
  }

  debug(message: string) {
    this.debugLogs.push({
      message,
      level: "debug",
    });
  }

  error(message: string) {
    this.log(message, "error");
    this.getDebugLogs();
    this.debugLogs = [];
  }
}
