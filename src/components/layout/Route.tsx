import { useRoutes } from "react-router-dom";
import * as content from "../../content";
import { Home } from "../../pages";

export function Route() {
  const { OverviewContent } = content;
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Home>
          <OverviewContent />
        </Home>
      ),
    },
    {
      path: "*",
      element: (
        <Home>
          <OverviewContent />
        </Home>
      ),
    },
  ]);

  return routes;
}
