import fetch from "node-fetch";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

export default async function loadMovies(param) {
  const baseUrl = "https://plankton-app-xhkom.ondigitalocean.app/api/movies/";
  
  //if a parameter is passed it fetches with the parameter, otherwise without
  const res = param ? await fetch(baseUrl + param) : await fetch(baseUrl);
  const data = await res.json();
  /* if its an array it formats&restructuring all elements and returns them as objects,
       if its a single object it handles it separately in the else */
  if (Array.isArray(data.data)) {
    return data.data.map((elem) => {
      elem.attributes.intro = md.render(elem.attributes.intro);
      return {
        id: elem.id,
        ...elem.attributes,
      };
    });
  } else {
    // questionable solution.
    try {
      data.data.attributes.intro = md.render(data.data.attributes.intro);
      return { id: data.data.id, ...data.data.attributes };
    } catch (err) {}
  }
}
