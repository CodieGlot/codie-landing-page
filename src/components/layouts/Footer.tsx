import "./styles/Footer.scss";

export function Footer() {
  return (
    <>
      <footer>
        <div className="social-wrapper">
          <a title="Kamil Mysliwiec Facebook" href="#" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a title="Kamil Mysliwiec Twitter" href="#" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a title="Kamil Mysliwiec Github" href="#" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="#"
            title="Kamil Mysliwiec Blog | Full-Stack Software Engineer"
            target="_blank"
          >
            <i className="fa fa-globe"></i>
          </a>
        </div>
        <div className="credits">
          <p>
            Copyright belongs to
            <a
              href="#"
              target="_blank"
              title="Kamil Mysliwiec Blog | Full-Stack Software Engineer"
            >
              Codie
            </a>
            <span className="separator"></span> design by
            <a href="#" title="Jakub Staron Dribble" target="_blank">
              Codie
            </a>
            <br />
            Official Development Team
            <a
              href="#"
              target="_blank"
              title="Official NestJS Consulting | Angular Consulting"
            >
              Codie
            </a>
            <span className="separator"> </span> hosted by
            <a href="#" target="_blank">
              Vercel
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
