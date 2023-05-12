/*
   Takes an array of date objects and groups them in an array.
   returns an an array in this format:
   [ 
     [
   '5/10/2023, 9:30:00 AM', '5/10/2023, 2:45:00 PM', '5/10/2023, 4:15:00 PM'
     ],
   ]
*/
export default function sortByDayAndTime(arrayOfDates: Date[]) {
    const sortedDates = arrayOfDates.reduce((acc, date) => {

        const day = date.toDateString(); // Turns date into string
        const time = date.toLocaleString(); // Gets time string
        if(!acc[day]) {
            acc[day] = []; // Creates a new array if the date doesnt exist
        }
        acc[day].push(time);
        return acc;
    }, {});

    // Convert the object into an array of arrays
    const resultArray = Object.values(sortedDates);
    return resultArray;
}