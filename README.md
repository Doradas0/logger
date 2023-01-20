# @doradas0/logger
### A Typesafe logger tool that only prints debug logs when an error occurs
Built using @aws-lambda-powertools/logger

### Install
> ```npm i @doradas0/logger```

### Basic Example
> ```ts
> import { Logger } from '@doradas0/logger
> const logger = new Logger()
>
> export const handler = async (event) => {
> 	// Debug log won't print
>	logger.debug("Event: " , event)
>
> 	try {
> 		asyncFunction()
>	catch ( error ) {
>		// logger.error prints error then prints all debug logs
> 		logger.error("Async Function Failed", error)
>	}
> }

### Available methods
> ```ts
> logger.info("Info Message", optionalData)
> logger.warn("Warning Message", optionalData)
> logger.debug("Debug Message: " , optionalData)
> logger.error("Error Message", optionalError, optionalData)``bash npm i @doradas0/logger```
