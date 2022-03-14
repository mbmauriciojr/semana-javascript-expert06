import config from "../config/config.js";
import { Controller } from "../controller/controller.js";
import { logger } from '../util.js';

const { 
  location,
  pages: {
    homeHTML,
  },
} = config;

async function routes(request, response) {
  const { method, url } = request;

const controller = new Controller()

  if(method === 'GET' && url === '/') {
    response.writeHead(302, {
      'Location': location.home,
    });

    return response.end();
  };

  if(method === 'GET' && url === '/home') {
    const {
      stream,
    } = await controller.getFileStream(homeHTML);

    return stream.pipe(response);
  };

  return response.end('Hello');
};

export function handler(request, response) {
  return routes(request, response)
    .catch(error => logger.error(`Algo deu eerrado: ${error.stack}`));
};
