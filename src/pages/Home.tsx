import "./styles/Home.scss";
import { useContext } from "react";
import { SidebarContext } from "../context";

import Home_Content from "../content/Home_Content.mdx";

export function Home() {
  const isSidebarOpened = useContext(SidebarContext);
  return (
    <div
      className={"content-wrapper " + (isSidebarOpened ? "sidebar-opened" : "")}
    >
      <Home_Content />
    </div>
  );
}
