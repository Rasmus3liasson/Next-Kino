import React, { useState, useEffect, FormEvent, useContext } from "react";
import strongPasswordCheck from "@/util/strongPasswordCheck";
import loadingSpinner from "../../public/loadingSpinner.svg";
import Image from "next/image";
import { loginModalContext } from "@/util/loginModalContext";
import {
  StrengthMeterStyles,
  SubmitedUserResponse,
  UserType,
} from "@/util/types";
import Link from "next/link";

const CreateUserForm = () => {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [eMail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwStrength, setPwStrength] = useState(25);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [created, setCreated] = useState(false);

  useEffect(() => {
    setPwStrength(strongPasswordCheck(password));
  }, [password]);

  //keyvalues acts as percentage
  const strengthMeter: StrengthMeterStyles = {
    25: { style: "w-[25%] bg-red-500 ", text: "Too weak" },
    50: { style: "w-[50%] bg-orange-500 ", text: "Weak" },
    75: { style: "w-[75%] bg-yellow-500 ", text: "Mediumstrong" },
    100: { style: "w-[100%] bg-green-500 ", text: "Strong password!" },
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors([]);
    setSubmitting(true);

    const newUser: UserType = {
      name: {
        first: firstName,
        last: lastName,
      },
      userName: userName,
      email: eMail,
      password: password,
    };

    const resp = await fetch("/api/auth/CreateNewUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const data: SubmitedUserResponse = await resp.json();
    
    // Timeout only for show LEL
    setTimeout(() => {
      data && setSubmitting(false);
      data.errors.length >= 0 && setErrors(data.errors);
      resp.status === 201 && setCreated(true)
    }, 800);
  };

  return created ? (
    <Submitted firstName={firstName} />
  ) : (
    <form
      className="max-w-md mx-auto self-center px-5 my-5 rounded-2xl shadow-lg flex flex-col flex-grow justify-center bg-cblue"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h1 className="py-2 mx-auto text-4xl text-white font-bold">
        Skapa konto
      </h1>
      {submitting && <Spinner />}

      <div className="w-[95%] mx-auto flex flex-col">
        <section className="flex space-x-2 mb-2">
          <div>
            <label htmlFor="fName" className="block mb-1 text-white">
              Förnamn:
            </label>
            <input
              className="rounded-md w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
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
              className="rounded-md w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
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
              className="rounded-md w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
              onChange={(ev) => setUserName(ev.target.value)}
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
              className="rounded-md w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
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
              Lösenord:
            </label>
            <input
              className={`${
                password === confirmPassword && password.length > 4
                  ? "border-2 border-green-500"
                  : "border-transparent focus:border-clightblue"
              } rounded-md w-full mb-2 focus:outline-none focus:ring-0 border-4  `}
              onChange={(ev) => setPassword(ev.target.value)}
              id="passwordInput"
              required
              type="password"
              placeholder="Lösenord"
            />
          </div>
          <div>
            <label htmlFor="confPassword" className="block mb-1 text-white">
              Bekräfta:
            </label>
            <input
              className={`${
                password === confirmPassword && password.length > 4
                  ? "border-2 border-green-500"
                  : "border-transparent focus:border-clightblue blur:border-red-500"
              } rounded-md w-full mb-2 focus:outline-none focus:ring-0 border-4 `}
              onChange={(ev) => setConfirmPassword(ev.target.value)}
              id="confPassword"
              required
              type="password"
              placeholder="Lösenord"
            />
          </div>
        </section>
        <h4 className="text-center text-white">
          {password !== confirmPassword &&
            confirmPassword.length > 0 &&
            "Lösenorden matchar inte"}
        </h4>

        {password.length > 0 && (
          <div
            className={` ${
              strengthMeter[pwStrength as keyof StrengthMeterStyles].style
            } transition-all transition-duration: 250ms my-2 px-2 text-center rounded-full `}
          >
            {strengthMeter[pwStrength as keyof StrengthMeterStyles].text}
          </div>
        )}

        <ul className="!p-0 mt-2 flex flex-col">
          {errors.map((errorMessage, index: number) => {
            return (
              <li
                key={index}
                className="text-black rounded-md my-1 pl-2 border-2 border-red-500 bg-white text-lg"
              >
                {errorMessage}
              </li>
            );
          })}
        </ul>

        <button
          className="rounded-md my-4 w-1/2 self-center bg-clightblue font-semibold  border-2 border-transparent hover:border-white"
          id="submitBtn"
          disabled={password !== confirmPassword}
        >
          Bekräfta
        </button>
      </div>
    </form>
  );
};

export default CreateUserForm;

const Spinner = () => {
  return (
    <div className="absolute -inset-x-1/2 -inset-y-full flex justify-center items-center z-50">
      <Image alt="loader" src={loadingSpinner} />
    </div>
  );
};

const Submitted = ({ firstName }: { firstName: string }) => {
  const { loginModalOpen, setLoginModalOpen } = useContext(loginModalContext);

  return (
    <div className="max-w-md mx-auto self-center mt-5 rounded-2xl shadow-lg flex flex-col flex-grow justify-center items-center bg-cblue">
      <h1 className="text-3xl text-white font-semibold mt-4 mb-2">
        Registrering lyckades!
      </h1>
      <p className="text-lg text-white font-semibold mb-4 mt-2">
        Välkommen {firstName}, vad vill du göra nu?
      </p>

      <button
        className="hover:text-clightblue text-gray-50 text-1x font-semibold my-1 p-1"
        onClick={() => {
          setLoginModalOpen(true);
        }}
      >
        Logga in?
      </button>

      <Link
        href="/"
        className="hover:text-clightblue text-gray-50 text-1xl font-semibold mb-4 p-1"
      >
        Tillbaka till startsidan
      </Link>
    </div>
  );
};
