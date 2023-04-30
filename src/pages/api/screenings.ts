import { MovieShowtime } from '../../util/types';
import fetch from 'node-fetch';
import ApiAdapter from '../../util/ApiAdapter.js';
import type { NextApiRequest, NextApiResponse } from "next";

const api = new ApiAdapter();
const screeningsEndpoint = '/screenings'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<MovieShowtime>
    ) {
        
        const screenings = await getScreeningsList(getScreeningsWithMovies);
        if(screenings){
            res
              .status(200)
              .send(screenings);
        } else {
            res.status(500).end();
        }
    }
    
    
    const getTotal = async () => {
    const metadata = await api.loadMetaData(screeningsEndpoint);
        return metadata.pagination.total;
    }

export const getScreeningsWithMovies = {
    loadData : async () => {

        const res = await fetch("https://plankton-app-xhkom.ondigitalocean.app/api/screenings?populate=movie");
        const data = await res.json();

        return data;
        
    },
    loadAllData : async (total: number) => {
            const res = await fetch(`https://plankton-app-xhkom.ondigitalocean.app/api/screenings?populate=movie&pagination[pageSize]=${total}`);
            const data = await res.json();

            return data;
        
    }
}
// Formatting and filtering JSON to send only relevant data for rendering. 





type ApiProps = {
    loadAllData: (param: number) => { data: MovieShowTime[] };
    loadData: () => {};
}

export const getScreeningsList = async ( { loadAllData }: ApiProps ): MovieShowtime[] => {
   
    const data = loadAllData(await getTotal());
    
    const res = data.data   

    // TODO: Change .map() to fit new database schema. 
    .map( array => ({
        id: array.id, 
        ...array.attributes,
        movie: {
            id: array.attributes.movie.data.id,
            ...array.attributes.movie.data.attributes
        }
    }))
     
    .filter(screeningDate => {
        const now = new Date().getTime();
        return Date.parse(screeningDate.start_time) > now;   
    })
    // TODO : Add parsing of datestring to swedish format. 
    .filter(screeningDate => {
        const showTime = Date.parse(screeningDate.start_time); 
        const now = new Date().getTime();
        const fiveDays = 5 * 24 * 60 * 60 * 1000;
        const tooFarAhead = now + fiveDays;
        return showTime < tooFarAhead;
    })
    .filter((screeningDate, index) => {
        return index > 9 ? false : true;
    })
    return res;
}