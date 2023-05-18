import Head from "next/head";
import connectMongo from "@/util/connectMongo";
import Movie from "../../../../models/movie";
import ShowReviews from "@/components/ShowReviews";
import { ReviewData, ReviewProps } from "../../../types/reviewTypes";

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

export default function MoviePage({ reviewData }: ReviewProps) {
  return (
    <>
      <Head>
        <title>Lule Northern Light Cinema</title>
        <meta
          name="description"
          content="This page allows you to see what screenings this movie has and information about it"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ShowReviews reviewData={reviewData} />
    </>
  );
}
