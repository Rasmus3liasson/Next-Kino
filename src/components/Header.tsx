import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//temporary data should include movie title and image from database that will be retrieved from the comment code
const data: string[] = [
  "End Game",
  "Mario",
  "Maria",
  "maridsdteo",
  "thereo",
  "Maio",
  "Maio",
  "Maio",
  "Maio",
  "fight",
  "Fight Club",
  "The Shawshank Redemption",
];

/* async function retriveMovieData() {
  const res = await fetch("/api/screenings");
  const data = await res.json();

  return data;
} */

export default function Header() {
  const router = useRouter();

  //Just an example path
  const [path, setPath] = useState<string>("/login");

  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState<string[]>([]);

  /*   const [movieTitle, setMovieTitle] = useState<string[]>([]);
  const [movieImage, setMovieImage] = useState<string[]>([]);

  async function setMovieContent() {
    const data = await retriveMovieData();

    setMovieTitle(data);
    setMovieImage(data);
  }

  useEffect(() => {
    setMovieContent();
  }, [searchResult]); */

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
  const currentPage = (path: string[]) => {
    return path.includes(router.asPath) ? "current-page" : "";
  };

  //filter and show result that match value
  const manageInput = (event: { target: { value: string } }) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    if (inputValue.length >= 2) {
      const filteredResults = data.filter((input) =>
        input.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearchResult(filteredResults);
    } else {
      setSearchResult([]);
    }
  };

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg sticky-top">
        <Link href={router.asPath.includes(path) ? path + "/" : "/"}>
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
              {!router.asPath.includes(path) ? (
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
              <Link
                className={`nav-link ${currentPage(["/", path])}`}
                href={router.asPath.includes(path) ? path + "/" : "/"}
              >
                Startsida
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${currentPage([
                  "/about",
                  path + "/about",
                ])}`}
                href={router.asPath.includes(path) ? path + "/about" : "/about"}
              >
                Om oss
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${currentPage([
                  "/contact",
                  path + "/contact",
                ])}`}
                href={
                  router.asPath.includes(path) ? path + "/contact" : "/contact"
                }
              >
                Kontakt
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${currentPage([
                  "/openinghours",
                  path + "/openinghours",
                ])}`}
                href={
                  router.asPath.includes(path)
                    ? path + "/openinghours"
                    : "/openinghours"
                }
              >
                Öppetider
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
                value={searchInput}
                onChange={manageInput}
              />
              {/* condition so not show dropdown */}
              {searchResult.length > 0 && (
                <div className="dropdown-menu show">
                  <ul>
                    {searchResult.map((movieDetails) => (
                      <li key={movieDetails}>
                        <Link
                          className="dropdown-item"
                          /* need to add correct id from database movieTitle variable */
                          href="/movies/id"
                          onClick={() => setSearchInput(movieDetails)}
                        >
                          <p>{movieDetails}</p>
                          {/* temporarly image waiting on poster from database */}
                          <Image
                            src={"/dummy.jpg"} //movieImage varaible
                            alt="poster of movie"
                            width={150}
                            height={150}
                          ></Image>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* if no matching results */}
              {searchInput.length > 1 && searchResult.length === 0 && (
                <div className="dropdown-menu show">
                  <ul>
                    <li className="no-match">Ingen matchning</li>
                  </ul>
                </div>
              )}
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

          {/* implement name from database */}
          {router.asPath.includes(path) && <p>FirstName</p>}
        </div>
      </nav>
    </header>
  );
}
