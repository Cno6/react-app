import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

enum routeName {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

const routePath: Record<routeName, string> = {
  [routeName.MAIN]: '/',
  [routeName.ABOUT]: '/about',
  [routeName.NOT_FOUND]: '*',
};

const routeConfig: RouteProps[] = [
  { path: routePath.main, element: <MainPage /> },
  { path: routePath.about, element: <AboutPage /> },
  { path: routePath.not_found, element: <NotFoundPage /> },
];

export {
  routeName,
  routePath,
  routeConfig,
};
