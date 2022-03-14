// Arquivo utilizado para exportar o Log para o servidor
import pino from 'pino'

const log = pino({
  enabled: !(!!process.env.LOG_DISABLED),
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

export const logger = log;
