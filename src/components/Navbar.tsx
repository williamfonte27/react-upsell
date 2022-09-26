export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-upsell-secondary p-3 mb-3">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="/src/assets/logo.png"
              alt="Logo UpSell Guru"
              className="logo"
              width="130px"
            />
          </a>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link bg-white link-upsell-active p-2" href="/">
                DASHBOARD
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-upsell" href="/send">
                SEND
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-upsell" href="/transactions">
                TRANSACTIONS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-upsell" href="/interfaces">
                INTERFACES
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle link-upsell"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                REPORTS
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle link-upsell"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                SETUP
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
        <a className="link-upsell text-white me-3 text-2x" href="#">
            <i className="fa-solid fa-magnifying-glass"></i>
        </a>

        <a className="link-upsell text-white me-3 text-2x" href="#">
            <i className="fa-sharp fa-solid fa-gift"></i>
        </a>

        <a className="link-upsell text-white me-3  text-2x" href="#">
            <i className="fa-solid fa-circle-question"></i>
        </a>

          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow link-upsell "
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              HOTEL #6
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a className="dropdown-item" href="#">
                  My profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    // <header className="p-3 mb-3 border-bottom bg-primary">
    //     <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start px-2">
    //         <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
    //             <img src="/src/assets/logo.png" alt="Logo UpSell Guru" className="logo" width='100px' />
    //         </a>

    //         <ul className="nav col-16 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
    //             <li><a href="/" className="nav-link px-2 link-dark">DASHBOARD</a></li>
    //             <li><a href="/send" className="nav-link px-2 link-dark">SEND</a></li>
    //             <li><a href="/transactions" className="nav-link px-2 link-dark">TRANSACTIONS</a></li>
    //             <li><a href="/interfaces" className="nav-link px-2 link-dark">INTERFACES</a></li>
    //             <li><a href="#" className="nav-link px-2 link-dark">REPORTS</a></li>
    //             <li><a href="#" className="nav-link px-2 link-dark">SETUP</a></li>
    //         </ul>

    //         <div className="dropdown text-end">
    //             <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    //                 <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
    //             </a>
    //             <ul className="dropdown-menu text-small">
    //                 <li><a className="dropdown-item" href="#">New project...</a></li>
    //                 <li><a className="dropdown-item" href="#">Settings</a></li>
    //                 <li><a className="dropdown-item" href="#">Profile</a></li>
    //                 <li><hr className="dropdown-divider" /></li>
    //                 <li><a className="dropdown-item" href="#">Sign out</a></li>
    //             </ul>
    //         </div>
    //     </div>
    // </header>
  );
}
