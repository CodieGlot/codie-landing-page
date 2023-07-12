import { useContext, useState } from "react";
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
  const [isOpen, setIsOpen] = useState<{ [title: string]: boolean }>({});
  const items: IMenuItem[] = [
    {
      title: "OVERVIEW",
      path: "/",
      children: [
        {
          title: "Background",
          path: "/background",
        },
        {
          title: "Techniques",
          path: "/techniques",
        },
      ],
    },
    {
      title: "CONCEPTS",
      path: "/concepts",
      children: [
        {
          title: "Algorithms",
          path: "/algorithms",
        },
        {
          title: "Object Oriented Programming",
          path: "/oop",
        },
      ],
    },
    {
      title: "TOOLS",
      path: "/tools",
      children: [
        {
          title: "Text editor",
          path: "/texteditor",
        },
        {
          title: "Codie",
          path: "/codie",
        },
      ],
    },
  ];

  const toggleDropdown = (title: string) => {
    setIsOpen((prevOpen) => ({
      ...prevOpen,
      [title]: !prevOpen[title],
    }));
  };

  const dropdownItems = items.map((item) => (
    <div key={item.title}>
      <a className="btn btn-version" onClick={() => toggleDropdown(item.title)}>
        <NavLink to={item.path} className="nav-link" style={highlightIfActive}>
          {item.title}
        </NavLink>
      </a>
      {isOpen[item.title] && item.children && (
        <ul className="dropdown-menu">
          {item.children.map((child) => (
            <li key={child.title}>
              <a href={child.path}>{child.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  ));

  return (
    isSidebarOpened && (
      <nav className="nav-container">
        {dropdownItems}
        <a target="_blank" className="btn btn-support">
          Get enterprise support
        </a>
      </nav>
    )
  );
}
