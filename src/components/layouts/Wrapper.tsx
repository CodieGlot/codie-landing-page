import { Footer } from "./Footer";
import { Header } from "./Header";
import { Menu } from "./Menu";

type WrapperProps = {
  children: React.ReactNode;
};

export function Wrapper({ children }: WrapperProps) {
  return (
    <>
      <Header />
      <Menu />
      {children}
      <Footer />
    </>
  );
}
