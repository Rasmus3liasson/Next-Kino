import style from "style.module.scss";

/*
    Create a container for the component
        Container component with an subcomponent for each movie 
    Container should have a Header, a list of links, and a button att the bottom. 
        use a button at the bottom and style it to look like text. 
    Each item in the list should be a movieposter and be clickable
        use Link to make each component of movie.
    the bottom button should expand the list with all the said movies.
        use a boolean state to expand the list with the props given to the server.

*/

export default function AllMovies(movies) {
  return (
    <>
      <h3>På bio just nu</h3>

      <button>Se alla filmer</button>
    </>
  );
}
