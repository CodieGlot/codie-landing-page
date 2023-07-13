import "./styles/Footer.scss";

export function Footer() {
  return (
    <>
      <footer>
        <div className="social-wrapper">
          <a href="https://www.facebook.com/codieglot/" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://github.com/CodieGlot" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/codieglot/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://discordapp.com/users/847426886182240307"
            target="_blank"
          >
            <i className="fa-brands fa-discord"></i>
          </a>
        </div>
        <div className="credits">
          <p>
            Copyright belongs to
            <a href="https://github.com/CodieGlot" target="_blank">
              _Codie
            </a>
            <span className="separator"></span> design by
            <a href="https://github.com/CodieGlot" target="_blank">
              _Codie
            </a>
            <br />
            Official Development Team
            <a href="https://github.com/CodieGlot" target="_blank">
              _Codie
            </a>
            <span className="separator"> </span> hosted by
            <a href="https://vercel.com/" target="_blank">
              _Vercel
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
