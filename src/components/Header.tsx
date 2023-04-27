import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const router = useRouter();

  const toggleNav = () => {
    const nav = document.querySelector("#navbarSupportedContent");
    nav?.classList.toggle("sidebar");
    nav?.classList.toggle("animation-nav");
  };

  const toggleAccountNav = () => {
    const accountIcon = document.querySelector(".dropdown-account");
    accountIcon?.classList.toggle("dropdown-account-show");
  };

  //sets underline to link based on current route
  const currentPage = (path: string) => {
    return router.asPath === path ? "current-page" : "";
  };

  return (
    <header>
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
              className="navbar-toggler-icon navbar-toggler hamburger-icon"
            ></span>
          </div>
          {/* Dropdown for account */}
          <div className="dropdown-account">
            <a className="dropdown-item" href="#">
              Logga in
            </a>
            <a className="dropdown-item" href="#">
              Skapa Konto
            </a>
          </div>
        </div>

        <div className="navbar-collapse sidebar" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
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
                className={`nav-link ${currentPage("/otherRoute")}`}
                href={"/otherRoute"}
              >
                Another Route
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
        <div>
          <Image
            onClick={toggleAccountNav}
            className="account-icon"
            src={"/account-icon.png"}
            alt="accout logo"
            height={50}
            width={50}
          />
        </div>
      </nav>
    </header>
  );
}
