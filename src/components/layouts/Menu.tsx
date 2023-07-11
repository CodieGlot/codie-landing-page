import { useContext } from "react";
import "./styles/Menu.scss";
import { SidebarContext } from "../../context";

export function Menu() {
  const isSidebarOpened = useContext(SidebarContext);
  return (
    isSidebarOpened && (
      <nav className="nav-container">
        <a href="#" className="btn btn-version">
          Version 1
        </a>
        <a href="#" className="btn btn-version">
          Version 2
        </a>
        <a href="#" className="btn btn-version">
          Version 3
        </a>
        <a href="#" className="btn btn-version">
          Version 4
        </a>
        <a
          href="#"
          target="_blank"
          title="Enterprise | NestJS - A node.js framework built on top of TypeScript"
          className="btn btn-support"
        >
          Get enterprise support
        </a>
      </nav>
    )
  );
}
