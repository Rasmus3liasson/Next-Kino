import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, createContext } from "react";
import SearchInput from "./SearchInput";
import { accountStateContext } from "@/pages/_app";
import LoginForm from "./LoginForm";
import { loginModalContext } from "@/util/loginModalContext";

export default function Header() {
  const router = useRouter();

  const { accountState } = useContext(accountStateContext);
  const { loginModalOpen, setLoginModalOpen } = useContext(loginModalContext);

  const toggleNav = () => {
    const nav = document.querySelector("#navbarSupportedContent");
    const menuIcon = document.querySelector("#menu-icon");
    nav?.classList.toggle("sidebar");
    nav?.classList.toggle("animation-nav");
    menuIcon?.classList.toggle("cross-icon");
    menuIcon?.classList.toggle("navbar-toggler-icon");
  };

  return (
    <>
      {loginModalOpen && <LoginForm />}
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg sticky-top">
          <Link href={"/"}>
            <Image
              priority={true}
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
              src={"/account-icon.png"}
              alt="accout logo"
              height={50}
              width={50}
            />

            {accountState ? (
              <DropDown username={accountState.name.first} />
            ) : (
              <button
                onClick={() => {
                  setLoginModalOpen(true);
                }}
              >
                Logga in
              </button>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

function DropDown({ username }: { username: string }) {
  return (
    <div className="group inline-block relative">
      <div className="relative">
        <button className="text-2xl font-semibold after:content-['\25BE']">
          {username}
        </button>
        <ul className="hidden absolute group-hover:block group-hover:bg-blue-400 ">
          <li className="pt-2 px-2 hover:bg-blue-600">
            <Link className="text-1xl font-semibold hover:text-white" href="#">
              Profil
            </Link>
          </li>
          <li className="py-2 px-2 hover:bg-blue-600">
            <Link
              className="text-1xl font-semibold hover:text-white"
              href="/api/auth/Logout"
            >
              Logga ut
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
