# @doradas0/logger

### A Typesafe logger tool that only prints debug logs when an error occurs

Built using @aws-lambda-powertools/logger

### Install

```bash 
npm i @doradas0/logger
```

### Basic Example

```JavaScript
import { Logger } from "@doradas0/logger"

const logger = new Logger("Sample Service")

export const handler = async (event) => {
  // Stores log until error an occurs
  logger.debug("Event: " , event)

  try {
    asyncFunction()
  } catch ( error ) {
    // Prints error, then prints all debug logs
    logger.error("Async Function Failed", error)
  }
}
```

### Available methods

```JavaScript
logger.info("Info Message", optionalData)
logger.warn("Warning Message", optionalData)
logger.debug("Debug Message: " , optionalData)
logger.error("Error Message", optionalError, optionalData)
```
