import { getMovie } from "@/util/dbAggregations";
import connectMongo from "@/util/connectMongo";
import Movie from "../../../../../models/movie";
import { getMovieScreenings } from "@/pages/api/upcoming-screenings";

export async function getStaticProps({ params }: { params: { id: string } }) {
    const { id } = params;
  
    await connectMongo();
  
    //finds correct movie based on id
    const movie = await Movie.findOne({ title: id });

  
    return {
      props: {
        movie: await getMovie(id),
        movieScreenings: await getMovieScreenings(id),
        revalidate: 60, // In seconds
      },
    };
  }

  export default function PaymentPage({
    movie,
    movieScreenings,
  }: {
    movie: MovieProps;
    movieScreenings: string;
  }) {
    const parsedProps = JSON.parse(movieScreenings)[0];
    return(
        <>
          <Head>
            <title>Lule Northern Light Cinema</title>
            <meta name="description" content="Kino project in next.js" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <ConfirmPurchase screenings={movieScreenings}/>
          <Payment screenings= {movieScreenings}/>
        </>
      ); 
    }