/*
   Takes an array of date objects and groups them in an array.
   returns an an array in this format:
   [ 
     [
   '5/10/2023, 9:30:00 AM', '5/10/2023, 2:45:00 PM', '5/10/2023, 4:15:00 PM'
     ],
   ]
*/
export default function sortByDayAndTime(arrayOfDates: Date[]): Date[][] {

    const sortedDates: { [key: string]: Date[] } = arrayOfDates.reduce((acc, date) => {
        const day = new Date(date).toDateString(); // Turns date into string
        const time = new Date(date).toLocaleString(); // Gets time string

        if(!acc[day]) {
            acc[day] = []; // Creates an empty array if the date doesnt exist
        }
        acc[day].push(time); // Pushes time to array.
        return acc;
    }, {});

    // Convert the object into an array of arrays
    const resultArray: Date[][] = Object.values(sortedDates);
    return resultArray;
}