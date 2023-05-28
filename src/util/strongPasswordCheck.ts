export default function strongPasswordCheck(password: string) {
  const lowercase = password.match(/[a-z]/g);
  const uppercase = password.match(/[A-Z]/g);
  const number = password.match(/[0-9]/g);
  const specialChar = password.match(
    /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g
  );

  //Returnvalue acts as percentage
  if (password.length > 4) {
    if (lowercase && uppercase && number && specialChar) {
      return 100;
    }

    if (
      (lowercase && uppercase && number) ||
      (lowercase && uppercase && specialChar) ||
      (number && specialChar && lowercase) ||
      (number && specialChar && uppercase)
    ) {
      return 75;
    }

    if (
      (lowercase && uppercase) ||
      (lowercase && number) ||
      (lowercase && specialChar) ||
      (uppercase && number) ||
      (uppercase && specialChar) ||
      (number && specialChar)
    ) {
      return 50;
    }
  }
  return 25;
}
