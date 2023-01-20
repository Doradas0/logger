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
    const event = { foo: "bar" };
    logger.debug("test", event);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const error = new Error("test error");
    logger.error("test", error);
  });
});
