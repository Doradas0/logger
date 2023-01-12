interface Log {
  message: string;
  level: "info" | "warn" | "error" | "debug";
}

export class Logger {
  private debugLogs: Log[] = [];
  info(message: string) {
    console.info(
      JSON.stringify({
        message,
        level: "info",
      })
    );
  }
  warn(message: string) {
    console.warn(
      JSON.stringify({
        message,
        level: "warn",
      })
    );
  }
  debug(message: string) {
    this.debugLogs.push({
      message,
      level: "debug",
    });
  }
  error(message: string) {
    console.error(
      JSON.stringify({
        message,
        level: "error",
      })
    );
    this.getDebugLogs();
    this.debugLogs = [];
  }
  private getDebugLogs() {
    this.debugLogs.forEach((log) => {
      console.debug(JSON.stringify(log));
    });
  }
}
