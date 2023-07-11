import "./styles/Menu.scss";

export function Menu() {
  return (
    <nav className="nav-container">
      <a
        href="#"
        target="_blank"
        title="Enterprise | NestJS - A node.js framework built on top of TypeScript"
        className="btn btn-support"
      >
        Get enterprise support
      </a>
      <a href="#" className="btn btn-version">
        Version 1
      </a>
    </nav>
  );
}
