import Head from "next/head";
import MovieDetails from "@/components/MovieDetails";
import AllSpecificMovieScreenings from "@/components/AllSpecificMovieScreenings";
import { ScreeningType, SortedScreenings } from "@/util/types";
import { getMovieScreenings } from "@/pages/api/upcoming-screenings";
import { getMovieData } from "@/pages/api/movies";
import connectMongo from "@/util/connectMongo";
import Movie from "../../../../models/movie";
import ShowReviews from "@/components/ShowReviews";
import { ReviewData, ReviewProps } from "../../../../types/reviewTypes";

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { id } = params;

  await connectMongo();

  //finds correct movie based on id
  const movie = await Movie.findOne({ title: id });

  //for getting the reviews
  const reviewData: ReviewData[] = movie.reviews.map((review: ReviewData) => ({
    reviewerText: review.reviewerText,
    reviewerName: review.reviewerName,
    postDate: review.postDate.toString(), //converts date
    rating: review.rating,
  }));

  return {
    props: {
      reviewData,
      movie: await getMovieData(),
      movieScreenings: await getMovieScreenings(id),
    },
  };
}

// For the dynamic id
export async function getStaticPaths() {
  await connectMongo();

  const movies = await Movie.find();

  const paths = movies.map((movie: { title: string }) => ({
    params: { id: movie.title },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default function MovieDetailsPage({
  reviewData,
  movie,
  movieScreenings,
}: {
  reviewData: ReviewProps;
  movie: ScreeningType;
  movieScreenings: SortedScreenings;
}) {
  return (
    <>
      <Head>
        <title>Lule Northern Light Cinema</title>
        <meta
          name="This page get you see what screenings this movie has and information about it"
          content="Kino project in next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MovieDetails movieData={movie} />
      {/* Rating - component goes here! */}
      <ShowReviews reviewData={reviewData} />
      <AllSpecificMovieScreenings screenings={movieScreenings} />
    </>
  );
}
