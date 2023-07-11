import "./styles/Home.scss";
import { useContext } from "react";
import { Wrapper } from "../components/Wrapper";
import { SidebarContext } from "../context";

export function Home() {
  const isSidebarOpened = useContext(SidebarContext);
  return (
    <Wrapper>
      <div
        className={
          "content-wrapper " +
          (isSidebarOpened ? "sidebar-opened" : "sidebar-closed")
        }
      >
        <h1>Home</h1>
      </div>
    </Wrapper>
  );
}
