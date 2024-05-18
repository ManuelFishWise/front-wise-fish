import { ReactNode } from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';

interface RouteConfig {
  path: string;
  element: ReactNode;
}

interface RouterOutletProps {
  routes: RouteConfig[];
}

const RouterOutlet: React.FC<RouterOutletProps> = ({ routes }) => {
  const routeObjects: RouteObject[] = routes.map(({ path, element }) => ({
    path,
    element,
  }));

  const element = useRoutes(routeObjects);

  return <>{element}</>;
};

export default RouterOutlet;