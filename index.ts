import { Logger } from "./src/logger";

const SERVICE_NAME = "sample-service";

const logger = new Logger(SERVICE_NAME);

logger.debug("1");
logger.debug("2");
logger.info("3", { key1: "data" });
logger.debug("4");
const err = new Error("test error 1");
logger.error("5", err, { key2: "data" });
