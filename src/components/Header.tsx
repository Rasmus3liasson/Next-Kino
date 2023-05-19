import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import SearchInput from "./SearchInput";
import { accountStateContext } from "@/pages/_app";

export default function Header() {
  const router = useRouter();

  //retrives the context
  const { accountState } = useContext(accountStateContext);

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

  return (
    <>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg sticky-top">
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

            {/* Dropdown for account with condition based on state */}
            <div className="dropdown-account">
              <ul className="navbar-nav mr-auto d-flex flex-row gap-2">
                {!accountState ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" href={"/account"}>
                        Logga in
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href={"/account"}>
                        Skapa Konto
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <Link
                      className="nav-link sign-out-text"
                      href={"/api/auth/Logout"}
                    >
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
                <Link
                  className={`nav-link ${
                    router.asPath === "/" && "current-page"
                  }`}
                  href={"/"}
                >
                  Startsida
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    router.asPath === "/about" && "current-page"
                  }`}
                  href={"/about"}
                >
                  Om oss
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    router.asPath === "/contact" && "current-page"
                  }`}
                  href={"/contact"}
                >
                  Kontakt
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    router.asPath === "/openinghours" && "current-page"
                  }`}
                  href={"/openinghours"}
                >
                  Öppetider
                </Link>
              </li>
            </ul>
            <SearchInput />
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

            {accountState && <p>{accountState.name.first}</p>}
          </div>
        </nav>
      </header>
    </>
  );
}
