const allowedCors = [
  'https://moviesalexandera.nomoredomains.work',
  'http://localhost:3001',
];

const handlerCORS = (request, response, next) => {
  const { origin } = request.headers;
  const { method } = request;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = request.headers['access-control-request-headers'];

  if (allowedCors.includes(origin)) {
    response.header('Access-Control-Allow-Origin', origin);
    response.header('Access-Control-Allow-Credentials', true);
  }

  if (method === 'OPTIONS') {
    response.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    response.header('Access-Control-Allow-Headers', requestHeaders);
    return response.end();
  }

  return next();
};

module.exports = handlerCORS;
