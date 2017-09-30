import DefaultConfig from './default';
const { NODE_ENV = 'development' } = process.env;

const Config = Object.assign({}, DefaultConfig, require(`./${NODE_ENV}`));

module.exports = Object.assign(Config, {
  ORIGIN: `${Config.PROTOCOL}//${Config.HOSTNAME}${Config.PORT ? `:${Config.PORT}` : ''}`,
});
