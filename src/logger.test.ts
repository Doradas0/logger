import { Logger } from "./logger";

const logger = new Logger("test-service");

describe("Logger", () => {
  it("should log info", () => {
    logger.info("Order Updated");
  });
  it("should log warn", () => {
    logger.warn("Invalid Request", { requestId: "123", missingParams: ["foo"] });
  });
  it("should log debug then .5 seconds later log error", async () => {
    logger.debug("test", { foo: "bar" });
    await new Promise((resolve) => setTimeout(resolve, 500));
    logger.error("test", new Error("test"), { foo: "baz" });
  });
});
