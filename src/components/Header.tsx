import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const toggleNav = () => {
    const nav = document.querySelector("#navbarSupportedContent");
    const menuIcon = document.querySelector("#menu-icon");
    nav?.classList.toggle("sidebar");
    nav?.classList.toggle("animation-nav");
    menuIcon?.classList.toggle("cross-icon");
    menuIcon?.classList.toggle("navbar-toggler-icon");
  };

  const toggleAccountNav = () => {
    const accountIcon = document.querySelector(".dropdown-account");
    const nameText = document.querySelector(".name-text");

    accountIcon?.classList.toggle("dropdown-account-show");
    nameText?.classList.toggle("hide-name");
  };

  //sets underline to link based on current route
  const currentPage = (path: string) => {
    return router.asPath === path ? "current-page" : "";
  };

  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg darkblue-color sticky-top">
        <Link href={"/"}>
          <Image
            src={"/logo-cinema.png"}
            alt="logotype of our cinema"
            height={100}
            width={200}
          />
        </Link>
        <div>
          <div>
            <span
              onClick={toggleNav}
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler-icon navbar-toggler hamburger-icon border-0 text-white"
              id="menu-icon"
            ></span>
          </div>

          {/* Dropdown for account with condition based on route */}
          <div className="dropdown-account">
            <ul className="navbar-nav mr-auto d-flex flex-row gap-2">
              {router.asPath !== "/login" ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" href={"#"}>
                      Logga in
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href={"#"}>
                      Skapa Konto
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link sign-out-text" href={"/"}>
                    Logga ut
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="navbar-collapse sidebar" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className={`nav-link ${currentPage("/")}`} href={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${currentPage("/about")}`}
                href={"/about"}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${currentPage("/contact")}`}
                href={"/contact"}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${currentPage("/openinghours")}`}
                href={"/openinghours"}
              >
                Opening Hours
              </Link>
            </li>
          </ul>

          <div>
            <form className="d-flex p-2 my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Sök"
                aria-label="Search"
              />

              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                type="submit"
              >
                Sök
              </button>
            </form>
          </div>
        </div>
        <div className="account-icon">
          <Image
            className="logo-image"
            onClick={toggleAccountNav}
            src={"/account-icon.png"}
            alt="accout logo"
            height={50}
            width={50}
          />

          {router.asPath === "/login" && <p className="">Mohammed</p>}
        </div>
      </nav>
    </header>
  );
}
