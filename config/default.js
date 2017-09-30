const { NODE_ENV = 'development' } = process.env;

module.exports = {
  TITLE: 'React Atomic Desgin',
  ENV: NODE_ENV,
  PRODUCTION: NODE_ENV === 'production',
  DEVELOPMENT: NODE_ENV === 'development',
  PROTOCOL: 'http:',
  HOSTNAME: 'localhost',
  PORT: 3000,
  SRC_DIR: 'src',
  OUT_DIR: 'dist',
  PUBLIC_PATH: '/',
  SOURCEMAPS: true,
  VERBOSE: true,
  GLOBALS: [
    'TITLE',
    'ENV',
    'PRODUCTION',
    'DEVELOPMENT',
    'PROTOCOL',
    'HOSTNAME',
    'PORT',
    'VERBOSE',
  ],
};
