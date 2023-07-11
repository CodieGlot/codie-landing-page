import "./styles/Home.scss";
import { useContext } from "react";
import { SidebarContext } from "../context";

export function Home() {
  const isSidebarOpened = useContext(SidebarContext);
  return (
    <div
      className={"content-wrapper " + (isSidebarOpened ? "sidebar-opened" : "")}
    >
      <h1>Home</h1>
    </div>
  );
}
