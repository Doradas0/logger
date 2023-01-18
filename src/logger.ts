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

  /**
   *
   * @param message - Primary message to log
   * @param data - Additional data to log
   *
   * @example log.info("Order x Submitted", { foo: "bar" });
   *
   * @beta
   */
  info(message: string, data?: any) {
    this.log({ message, level: "info", data });
  }

  /**
   * @param message - Primary message to log
   * @param data - Additional data to log
   *
   * @example log.warn("Order x missing y", { foo: "bar" });
   * @beta
   *
   */
  warn(message: string, data?: any) {
    this.log({ message, level: "warn", data });
  }

  /**
   * @param message - Primary message to log
   * @param data - Additional data to log
   *
   * @example log.debug("Incoming Event", { event: { foo: "bar" } });
   * @beta
   *
   * @note This will only log on error
   *
   */

  debug(message: string, data?: any) {
    const dataToLog = { ...data, timestamp: new Date().toISOString() };
    this.debugLogs.push({ message, level: "debug", data: dataToLog });
  }

  /**
   * @param message - Primary message to log
   * @param error - Error to log
   * @param data - Additional data to log
   *
   * @example log.error("Order x failed", new Error("Order x failed"), { foo: "bar" });
   * @beta
   *
   */
  error(message: string, error: any, data?: any) {
    this.log({ message, level: "error", error, data });
    this.printDebugLogs();
    this.debugLogs = [];
  }
}
