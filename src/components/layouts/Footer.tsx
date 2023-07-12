import "./styles/Footer.scss";

export function Footer() {
  return (
    <>
      <footer>
        <div className="social-wrapper">
          <a href="#" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fa-brands fa-discord"></i>
          </a>
        </div>
        <div className="credits">
          <p>
            Copyright belongs to
            <a href="#" target="_blank">
              _Codie
            </a>
            <span className="separator"></span> design by
            <a href="#" target="_blank">
              _Codie
            </a>
            <br />
            Official Development Team
            <a href="#" target="_blank">
              _Codie
            </a>
            <span className="separator"> </span> hosted by
            <a href="#" target="_blank">
              _Vercel
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
