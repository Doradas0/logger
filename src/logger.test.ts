import { Logger } from "./logger";

const logger = new Logger("test-service");

describe("Logger", () => {
  it("should log debug then 2 seconds later log error", async () => {
    logger.debug("test", { foo: "bar" });
    await new Promise((resolve) => setTimeout(resolve, 2000));
    logger.error("test", new Error("test"), { foo: "baz" });
  });
});
