import { useRoutes } from "react-router-dom";
import { Home } from "./pages";
import { SidebarContext } from "./context";
import { useSidebar } from "./hooks";
import { Footer, Header, Menu } from "./components/layouts";

function App() {
  const { isSidebarOpened, toggleSidebar } = useSidebar();
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <Home /> },
  ]);

  return (
    <>
      <SidebarContext.Provider value={isSidebarOpened}>
        <Header toggleSidebar={toggleSidebar} />
        <Menu />
        {routes}
        <Footer />
      </SidebarContext.Provider>
    </>
  );
}

export default App;
