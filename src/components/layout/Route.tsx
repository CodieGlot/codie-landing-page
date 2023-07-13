import { useRoutes } from "react-router-dom";
import * as content from "../../content";
import { Home } from "../../pages";

export function Route() {
  const { Overview, NestjsStarterRepo } = content;
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Home>
          <Overview />
        </Home>
      ),
    },
    {
      path: "starter-repos/nestjs-starter-repo",
      element: (
        <Home>
          <NestjsStarterRepo />
        </Home>
      ),
    },
    {
      path: "*",
      element: (
        <Home>
          <Overview />
        </Home>
      ),
    },
  ]);

  return routes;
}
