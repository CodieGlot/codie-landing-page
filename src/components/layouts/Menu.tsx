import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Menu.scss";
import { SidebarContext } from "../../context";

const highlightIfActive = ({
  isActive,
}: {
  isActive: boolean;
  isPending: boolean;
}) => {
  return isActive
    ? {
        textDecoration: "none",
        color: "red",
      }
    : {};
};

export function Menu() {
  const isSidebarOpened = useContext(SidebarContext);
  return (
    isSidebarOpened && (
      <nav className="nav-container">
        <a className="btn btn-version">
          <NavLink to="/" className="nav-link" style={highlightIfActive}>
            OVERVIEW
          </NavLink>
        </a>
        <a className="btn btn-version">
          <NavLink
            to="/background"
            className="nav-link"
            style={highlightIfActive}
          >
            BACKGROUND
          </NavLink>
        </a>
        <a className="btn btn-version">Version 3</a>
        <a className="btn btn-version">Version 4</a>
        <a target="_blank" className="btn btn-support">
          Get enterprise support
        </a>
      </nav>
    )
  );
}
