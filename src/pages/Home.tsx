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
      <div className="home-container">
        <div className="home-content">
          <HomeContent />
        </div>
        <div className="markup">
          <ul>
            <li>Introduction</li>
            <li className="active">Phisolophy</li>
            <li>Nguyen Nhat Huy</li>
            <li>Codieglot</li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}
