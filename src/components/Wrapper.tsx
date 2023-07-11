import { Footer, Header, Menu } from "./layouts";
import { useSidebar } from "../hooks";
import { SidebarContext } from "../context";

type WrapperProps = {
  children: React.ReactNode;
};

export function Wrapper({ children }: WrapperProps) {
  const { isSidebarOpened, toggleSidebar } = useSidebar();

  return (
    <SidebarContext.Provider value={isSidebarOpened}>
      <Header toggleSidebar={toggleSidebar} />
      <Menu />
      {children}
      <Footer />
    </SidebarContext.Provider>
  );
}
