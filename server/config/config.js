import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Pega o nome da pasta de acordo com o caminho de url mandado.
const currentDir = dirname(fileURLToPath(import.meta.url));

const root = join(currentDir, '../');

const audioDirectory = join(root, 'audio');
const publicDirectory = join(root, 'public');

export default {
  port: process.env.PORT || 3000,
  dir: {
    root,
    publicDirectory,
    audioDirectory,
    songsDirectory: join(audioDirectory, 'songs'),
    fxDirectory: join(audioDirectory, 'fx')
  },
  pages: {
    homeHTML: 'home/index.html',
    controllerHTML: 'controller/index.html'
  },
  location: {
    // Quando bater somente no /, ele irá redirecionar para /home
    home: '/home'
  },
};
