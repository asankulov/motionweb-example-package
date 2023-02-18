const http = require('http');

const log4js = require('log4js');

const { requestHandler, httpHandlerV2, PI } = require('./handlers/index.js');

const server = http.createServer(requestHandler);

const server2 = http.createServer(httpHandlerV2);

server.listen(3000);

server2.listen(3001);

const logger = log4js.getLogger();
logger.level = "debug";

logger.info('Server started listening on port: ' + 3000);
logger.info('Server2 started listening on port: ' + 3001);
