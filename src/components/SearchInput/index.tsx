import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "./style.module.scss";

export default function SearchInput() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [movieTitleArr, setMovieTitleArr] = useState<string[]>([]);
  const [movieImageArr, setMovieImageArr] = useState<string[]>([]);

  useEffect(() => {
    async function fetchMovieData() {
      const res = await fetch("/api/movies/GET");
      const data = await res.json();
      const titles = data.movies.map((title: { title: string }) => title.title);
      const images = data.movies.map(
        (images: { imgUrl: string; images: string }) => images.imgUrl
      );
      setMovieTitleArr(titles);
      setMovieImageArr(images);
    }

    fetchMovieData();
  }, []);

  //filter and show result that match value
  const manageInput = (event: { target: { value: string } }) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    if (inputValue.length >= 2) {
      const filteredResults = movieTitleArr.filter((input) =>
        input.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearchResult(filteredResults);
    } else {
      setSearchResult([]);
    }
  };

  return (
    <form className="d-flex p-2 my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Sök"
        aria-label="Search"
        value={searchInput}
        onChange={manageInput}
      />
      {/* Condition to show dropdown */}
      {searchResult.length > 0 && (
        <div className={style.dropdownMenu}>
          <ul>
            {searchResult.map((movieTitle) => {
              const movieIndex = movieTitleArr.indexOf(movieTitle);

              // Retrieve image using the index of title
              const imageUrl = movieImageArr[movieIndex];
              return (
                <li key={movieTitle}>
                  <Link
                    className="dropdown-item"
                    href={`/movies/${movieTitle}`}
                    onClick={() => setSearchInput(movieTitle)}
                  >
                    <p>{movieTitle}</p>
                    <Image
                      src={imageUrl}
                      alt="poster of movie"
                      width={120}
                      height={130}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {/* If no matching results */}
      {searchInput.length > 1 && searchResult.length === 0 && (
        <div className={`${style.dropdownMenu} ${style.noMatch}`}>
          <ul>
            <li className="no-match">Ingen matchning</li>
          </ul>
        </div>
      )}
    </form>
  );
}
