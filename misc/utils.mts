export function randArrElem(arrLength: number) {
  return Math.floor(Math.random() * arrLength);
}

export function randDate(start: Date, end: Date) {
  const startDate = start;
  const endDate = end;
  const timeDiff = endDate.getTime() - startDate.getTime();

  const randomTime = Math.random() * timeDiff;
  const randomDate = new Date(startDate.getTime() + randomTime);

  return randomDate;
}
