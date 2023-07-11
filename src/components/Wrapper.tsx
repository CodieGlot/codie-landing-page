import { Footer } from "./layouts/Footer";
import { Header } from "./layouts/Header";
import { Menu } from "./layouts/Menu";
import { useSidebar } from "../hooks";

type WrapperProps = {
  children: React.ReactNode;
};

export function Wrapper({ children }: WrapperProps) {
  const { isSidebarOpened, toggleSidebar } = useSidebar();

  return (
    <>
      <Header isSidebarOpened={isSidebarOpened} toggleSidebar={toggleSidebar} />
      <Menu isSidebarOpened={isSidebarOpened} />
      {children}
      <Footer />
    </>
  );
}
