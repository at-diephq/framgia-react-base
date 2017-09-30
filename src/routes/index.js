import AppRoute from './AppRoute';
import HomeRoute from './HomeRoute';

const routes = {
  ...AppRoute,
  indexRoute: HomeRoute,
};

export default routes;
