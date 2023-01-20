# @doradas0/logger

### A Typesafe logger tool that only prints debug logs when an error occurs

Built using @aws-lambda-powertools/logger

### Install

> `npm i @doradas0/logger`

### Basic Example

```TypeScript
import { Logger } from '@doradas0/logger

const logger = new Logger("Sample Service")

export const handler = async (event) => {
  // Debug log won't print
  logger.debug("Event: " , event)

  try {
    asyncFunction()
  catch ( error ) {
    // logger.error prints error then prints all debug logs
    logger.error("Async Function Failed", error)
  }
}
```

### Available methods

```TypeScript
logger.info("Info Message", optionalData)
logger.warn("Warning Message", optionalData)
logger.debug("Debug Message: " , optionalData)
logger.error("Error Message", optionalError, optionalData)
```
