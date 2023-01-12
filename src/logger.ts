import { Logger as AWSLogger } from "@aws-lambda-powertools/logger";

interface log {
  message: string
  level: "info" | "warn" | "error" | "debug"
  error?: Error,
  data?: any
}

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
    this.debugLogs.forEach((message) => {
    this.log({message, level:"debug"});
    });
  }

  private log(log: log){
    this.logger[log.level](log.message, log.error as Error);
  }

  info(message: string) {
    this.log({message, level:"info"});
  }

  warn(message: string) {
    this.log({message, level:"warn"});
  }

  debug(message: string) {
    this.debugLogs.push(message);
  }

  error(message: string, error: Error) {
    this.log({message, level:"error", error});
    this.printDebugLogs();
    this.debugLogs = [];
  }
}
