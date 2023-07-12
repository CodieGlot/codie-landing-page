import { useContext } from "react";
import "./styles/Header.scss";
import { SidebarContext } from "../../context";

type HeaderProps = {
  toggleSidebar: () => void;
};

export function Header({ toggleSidebar }: HeaderProps) {
  const isSidebarOpened = useContext(SidebarContext);
  return (
    <>
      <header>
        <button
          className={"icon-wrapper " + (isSidebarOpened ? "opened" : "")}
          onClick={() => toggleSidebar()}
        >
          <div className="nav-icon">
            <div className="mobile-nav-icon">
              <span></span>
            </div>
            <svg
              className="desktop-nav-icon"
              height="512pt"
              viewBox="0 -27 512 512"
              width="512pt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m213.117188 81.011719c6.273437-5.488281 6.910156-15.027344 1.421874-21.300781-5.492187-6.273438-15.027343-6.910157-21.300781-1.421876l-2.597656 2.273438c-6.273437 5.488281-6.910156 15.027344-1.421875 21.300781 2.984375 3.410157 7.164062 5.15625 11.367188 5.15625 3.527343 0 7.070312-1.230469 9.933593-3.734375zm0 0" />
              <path d="m117.898438 120.203125-2.597657 2.273437c-6.273437 5.492188-6.910156 15.027344-1.421875 21.300782 2.984375 3.414062 7.164063 5.15625 11.367188 5.15625 3.527344 0 7.070312-1.226563 9.933594-3.730469l2.597656-2.273437c6.273437-5.492188 6.910156-15.027344 1.421875-21.300782-5.488281-6.277344-15.027344-6.914062-21.300781-1.425781zm0 0" />
              <path d="m216.179688 121.503906-2.597657 2.273438c-6.269531 5.492187-6.90625 15.027344-1.417969 21.300781 2.984376 3.414063 7.164063 5.15625 11.367188 5.15625 3.527344 0 7.070312-1.230469 9.933594-3.738281l2.597656-2.273438c6.273438-5.488281 6.910156-15.027344 1.417969-21.300781-5.488281-6.273437-15.023438-6.90625-21.300781-1.417969zm0 0" />
              <path d="m315.523438 70.039062.253906-3.441406c.609375-8.316406-5.636719-15.550781-13.949219-16.160156s-15.550781 5.636719-16.160156 13.949219l-.253907 3.441406c-.609374 8.316406 5.636719 15.550781 13.949219 16.160156.375.027344.75.042969 1.121094.042969 7.835937 0 14.457031-6.054688 15.039063-13.992188zm0 0" />
              <path d="m403.570312 96.273438c-5.109374-6.589844-14.589843-7.789063-21.179687-2.683594-6.589844 5.109375-7.789063 14.589844-2.683594 21.179687l2.117188 2.730469c2.976562 3.835938 7.433593 5.847656 11.941406 5.847656 3.230469 0 6.484375-1.035156 9.238281-3.167968 6.585938-5.105469 7.789063-14.589844 2.679688-21.179688zm0 0" />
              <path d="m325.449219 118.675781c-8.308594-.628906-15.550781 5.632813-16.164063 13.945313l-.253906 3.441406c-.613281 8.316406 5.632812 15.550781 13.945312 16.164062.378907.027344.753907.042969 1.125.042969 7.832032 0 14.453126-6.050781 15.039063-13.988281l.253906-3.441406c.613281-8.316406-5.632812-15.550782-13.945312-16.164063zm0 0" />
              <path d="m479.355469 183.492188v-22.644532c0-88.691406-72.15625-160.847656-160.847657-160.847656h-116.597656c-88.691406 0-160.847656 72.15625-160.847656 160.847656v19.882813c-23.519531 5.632812-41.0625 26.820312-41.0625 52.039062v3.253907c0 25.21875 17.542969 46.40625 41.0625 52.039062v26.367188c0 3.339843.507812 6.597656 1.441406 9.6875v2.667968c0 72.097656 58.652344 130.75 130.75 130.75h175.351563c72.097656 0 130.75-58.652344 130.75-130.75v-41.484375c19.167969-8.152343 32.644531-27.171875 32.644531-49.277343v-3.253907c0-22.109375-13.476562-41.125-32.644531-49.277343zm-408.101563-22.644532c0-72.046875 58.609375-130.65625 130.65625-130.65625h116.597656c72.046876 0 130.65625 58.609375 130.65625 130.65625v18.402344h-377.910156zm377.910156 165.9375c0 4.710938-3.179687 7-4.546874 7.765625-1.378907.769531-5.023438 2.296875-9.082032-.191406-1.34375-.824219-2.664062-1.664063-3.980468-2.503906-10.746094-6.835938-24.117188-15.347657-48.917969-15.347657-24.804688 0-38.175781 8.507813-48.917969 15.347657-9.328125 5.9375-16.699219 10.628906-32.707031 10.628906-16.007813 0-23.375-4.6875-32.703125-10.628906-10.746094-6.835938-24.113282-15.347657-48.917969-15.347657-24.800781 0-38.171875 8.511719-48.914063 15.347657-9.328124 5.9375-16.695312 10.628906-32.703124 10.628906-16.003907 0-23.375-4.6875-32.699219-10.628906-7.894531-5.023438-16.839844-10.714844-30.464844-13.5625-1.425781-.296875-2.53125-1.210938-3.042969-2.394531-.03125-.078126-.058594-.160157-.09375-.238282-.136718-.390625-.21875-.800781-.21875-1.230468v-24.886719h377.910156zm-100.558593 100.558594h-175.355469c-47.492188 0-87.398438-33.097656-97.871094-77.4375 4.75 1.863281 8.773438 4.421875 13.480469 7.417969 10.742187 6.839843 24.113281 15.351562 48.914063 15.351562 24.800781 0 38.171874-8.511719 48.914062-15.351562 9.328125-5.9375 16.695312-10.628907 32.703125-10.628907s23.375 4.691407 32.703125 10.628907c10.746094 6.839843 24.113281 15.351562 48.917969 15.351562 24.800781 0 38.171875-8.511719 48.917969-15.351562 9.328124-5.9375 16.695312-10.628907 32.703124-10.628907 16.007813 0 23.378907 4.691407 32.707032 10.628907 1.460937.929687 2.917968 1.859375 4.40625 2.769531 6.667968 4.089844 14.089844 6.027344 21.488281 5.828125-15.292969 36.0625-51.054687 61.421875-92.628906 61.421875zm133.203125-191.320312c0 12.863281-10.464844 23.328124-23.328125 23.328124h-404.960938c-12.863281 0-23.328125-10.464843-23.328125-23.328124v-3.253907c0-12.863281 10.464844-23.328125 23.328125-23.328125h404.960938c12.863281 0 23.328125 10.464844 23.328125 23.328125zm0 0" />
            </svg>
          </div>
        </button>
        <div className="menu-wrapper">
          <div className="search-wrapper" id="search"></div>
          <ul>
            <li>
              <a href="#" target="_blank">
                Our website
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Courses
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <span className="new">NEW</span> Devtools
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Enterprise support
              </a>
            </li>
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
              <i className="fa-brands fab fa-discord"></i>
            </a>
          </ul>
        </div>
      </header>
    </>
  );
}
