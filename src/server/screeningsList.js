import fetch from 'node-fetch';
import ApiAdapter from '../util/ApiAdapter.js';

const api = new ApiAdapter();
const screeningsEndpoint = '/screenings'

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
    loadAllData : async (total) => {
            const res = await fetch(`https://plankton-app-xhkom.ondigitalocean.app/api/screenings?populate=movie&pagination[pageSize]=${total}`);
            const data = await res.json();

            return data;
        
    }
}
// Formatting and filtering JSON to send only relevant data for rendering. 
export const getScreeningsList = async (apiHandler) => {
   
    const data = await apiHandler.loadAllData(await getTotal());
    
    const res = data.data   
    
    .map( array => ({
        id: array.id, 
        ...array.attributes,
        movie: {
            id: array.attributes.movie.data.id,
            ...array.attributes.movie.data.attributes
        }
    }))
     
    .filter(screeningDate => {
        const now = new Date();
        return Date.parse(screeningDate.start_time) > now;   
    })
    // TODO : Add parsing of datestring to swedish format. 
    .filter(screeningDate => {
        const showTime = Date.parse(screeningDate.start_time); 
        const now = new Date();
        const fiveDays = 5 * 24 * 60 * 60 * 1000;
        const tooFarAhead = Date.parse(now) + fiveDays;
        return showTime < tooFarAhead;
    })
    .filter((screeningDate, index) => {
        return index > 9 ? false : true;
    })
    return res;
}