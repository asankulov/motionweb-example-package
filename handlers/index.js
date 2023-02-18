function httpHandler (request, response) {
  response.writeHead(200, {
    'Content-Type': 'application/json',
  });
  const goods = [
    {
      title: 'Kettle',
      price: 1500,
      article: 'Z0000100612',
      weight: 1.5,
      manufacturer: 'China',
      hasDiscount: true,
    },
    {
      title: 'Pod',
      price: 1200,
      article: 'Z0000100323',
      weight: 0.9,
      manufacturer: 'Russia',
      hasDiscount: false,
    },
  ];
  response.write(JSON.stringify(goods));
  response.end();
}

function httpHandlerV2 (request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  response.write('OK!');
  response.end();
}

const PI = 3.14;

// module.exports = {
//   httpHandler,
//   httpHandlerV2,
//   PI,
// }

module.exports.requestHandler = httpHandler;
module.exports.httpHandlerV2 = httpHandlerV2;
module.exports.PI = PI;

// module.exports = httpHandler;
