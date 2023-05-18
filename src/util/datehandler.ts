import { DateTime } from 'luxon';
/*
   Takes an array of date objects and groups them in an array.
   returns an an array in this format:
   [ 
     [
   '5/10/2023, 9:30:00 AM', '5/10/2023, 2:45:00 PM', '5/10/2023, 4:15:00 PM'
     ],
   ]
*/
export default function sortByDayAndTime(arrayOfDates: string[]): DateTime[][] {

    const sortedDates = arrayOfDates.reduce((acc, date) => {
      
        const luxonDate = DateTime.fromISO(date);
        const day = luxonDate.toISODate(); 
        const time = luxonDate;

        if(!acc[day]) {
            acc[day] = [];
        }
        acc[day].push(time);
        return acc;
    }, {});

    // Convert the object into an array of arrays
    const resultArray: DateTime[][] = Object.values(sortedDates);
    return resultArray;
    
}