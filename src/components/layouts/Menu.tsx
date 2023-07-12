import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Menu.scss";
import { SidebarContext } from "../../context";
import { IMenuItem } from "../../common/interfaces";

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
  const items: IMenuItem[] = [
    {
      title: "OVERVIEW",
      path: "/",
    },
    {
      title: "BACKGROUND",
      path: "/background",
    },
  ];
  return (
    isSidebarOpened && (
      <nav className="nav-container">
        {items.map((item) => (
          <a className="btn btn-version">
            <NavLink
              to={item.path}
              className="nav-link"
              style={highlightIfActive}
            >
              {item.title}
            </NavLink>
          </a>
        ))}
        <a target="_blank" className="btn btn-support">
          Get enterprise support
        </a>
      </nav>
    )
  );
}
