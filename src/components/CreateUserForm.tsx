import React, { useState, useEffect } from "react";
import strongPasswordCheck from "@/utils/strongPasswordCheck";

const CreateUserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [eMail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwStrength, setPwStrength] = useState(25);

  useEffect(() => {
    console.log(pwStrength);
    console.log(strengthMeter[25].style);
    setPwStrength(strongPasswordCheck(password));
  }, [password]);

  type StrengthMeterStyles = {
    25: {style: string, text: string};
    50: {style: string, text: string};
    75: {style: string, text: string};
    100: {style: string, text: string};
  };

  const strengthMeter: StrengthMeterStyles = {
    25: {style: "w-[25%] bg-red-500 ", text: "Very bad"},
    50: {style: "w-[50%] bg-orange-500 ", text: "Weak"},
    75: {style: "w-[75%] bg-yellow-500 ", text: "Mediumstrong"},
    100: {style: "w-[100%] bg-green-500 ", text: "Strong password!"},
  };

  return (
    <form
      className="max-w-md mx-auto self-center px-5 my-5 rounded-2xl shadow-lg flex flex-col flex-grow justify-center bg-cblue"
      id="createUserForm"
    >
      <h1 className="p-5 mx-auto text-4xl text-white font-bold">Skapa konto</h1>

      <div className="w-[95%] mx-auto flex flex-col">
        <section className="flex space-x-2 mb-2">
          <div>
            <label htmlFor="fName" className="block mb-1 text-white">
              Förnamn:
            </label>
            <input
              className="w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
              onChange={(ev) => setFirstName(ev.target.value)}
              id="fName"
              required
              type="text"
              placeholder="Förnamn"
            />
          </div>
          <div>
            <label htmlFor="lName" className="block mb-1 text-white">
              Efternamn:
            </label>
            <input
              className="w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
              onChange={(ev) => setLastName(ev.target.value)}
              id="lName"
              required
              type="text"
              placeholder="Efternamn"
            />
          </div>
        </section>
        <section className="flex space-x-2 mb-2">
          <div>
            <label htmlFor="uName" className="block mb-1 text-white">
              Användarnamn:
            </label>
            <input
              className="w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
              id="uName"
              required
              type="text"
              placeholder="Användarnamn"
            />
          </div>
          <div>
            <label htmlFor="eMail" className="block mb-1 text-white">
              E-mail:
            </label>
            <input
              className="w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
              onChange={(ev) => setEmail(ev.target.value)}
              id="eMail"
              required
              type="email"
              placeholder="E-mail"
            />
          </div>
        </section>
        <section className="flex space-x-2">
          <div>
            <label htmlFor="passwordInput" className="block mb-1 text-white">
              Skapa lösenord:
            </label>
            <input
              className="w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
              id="passwordInput"
              required
              type="password"
              placeholder="Lösenord"
            />
          </div>
          <div>
            <label htmlFor="confPassword" className="block mb-1 text-white">
              Bekräfta lösenord:
            </label>
            <input
              className="w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue blur:border-cligt"
              onChange={(ev) => setConfirmPassword(ev.target.value)}
              id="confPassword"
              required
              type="password"
              placeholder="Lösenord"
            />
          </div>
        </section>

        {password.length > 0 && (
          <div
            className={` ${strengthMeter[pwStrength as keyof StrengthMeterStyles].style
              } px-2 text-center rounded-full `}
          >
            {strengthMeter[pwStrength as keyof StrengthMeterStyles].text}
          </div>
        )}
        <div id="error" className="text-white text-lg"></div>
        {/*         <section className="flex  space-x-2 my-3">
          <label htmlFor="strNeter" className="w-1/2 text-white">
            Lösenordsstyrka
          </label>
          <meter
            id="strMeter"
            className="w-1/2"
            low={0}
            high={2}
            value=""
            max="4"
          ></meter>
        </section> */}
        {/* <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"></div> */}
        <button
          className="my-4 w-1/2 self-center bg-clightblue font-semibold  border-2 border-transparent hover:border-white"
          id="submitBtn"
        >
          bekräfta
        </button>
      </div>
    </form>
  );
};

export default CreateUserForm;
