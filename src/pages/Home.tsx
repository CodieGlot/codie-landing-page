import "./styles/Home.scss";
import { useContext } from "react";
import { SidebarContext } from "../context";

import HomeContent from "../content/HomeContent.mdx";

export function Home() {
  const isSidebarOpened = useContext(SidebarContext);
  return (
    <div
      className={"content-wrapper " + (isSidebarOpened ? "sidebar-opened" : "")}
    >
      <HomeContent />
    </div>
  );
}
