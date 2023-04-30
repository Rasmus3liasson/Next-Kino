export default interface MovieShowtime {
    id: number;
    attributes: {
      start_time: string;
      room: string;
      createdAt: string;
      updatedAt: string;
      movie: {
        data: {
          id: number;
          attributes: {
            title: string;
            imdbId: string;
            intro: string;
            image: {
              url: string;
            };
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
          };
        };
      };
    };
}

export default interface Movie {

    id: number;
    title: string;
    description: string;
    imgUrl: string;
    duration: number;
    screenings: {
        date: string; 
        availableSeats:{
            id:number;
            available: boolean;
        }[]
    }[];
    reviews: {
        reviewName: string;
        reviewText: string;
        postDate: string;
    }[];

}

  //https://kentcdodds.com/blog/using-fetch-with-type-script