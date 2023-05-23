import React, { useState, useContext } from "react";
import { accountStateContext } from "@/pages/_app";
import Router from "next/router";
import { loginModalContext } from "@/util/loginModalContext";
import Link from "next/link";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setAccountState } = useContext(accountStateContext);
  const { loginModalOpen, setLoginModalOpen } = useContext(loginModalContext);

  const handleSubmitLogin = async (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    const res = await fetch("/api/auth/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: userName, password: password }),
    });

    if (res.ok) {
      setAccountState(await res.json());
      setLoginModalOpen(false);
      Router.push("/");
    } else setError(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
      <form
        className=" right-1/2 mx-auto my-1 border-2 w-[90%] md:w-[50%] lg:w-[20%] border-black px-5 rounded-2xl shadow-lg flex flex-col justify-center bg-cblue"
        onSubmit={handleSubmitLogin}
      >
        <button
          className="text-3xl relative flex justify-end text-white left-7 top-2"
          onClick={() => setLoginModalOpen(false)}
        >
          ✖
        </button>
        <h1 className="py-2 mx-auto text-4xl text-white font-bold">Logga in</h1>

        <div className="w-full ">
          <label htmlFor="Username" className="block mb-1 text-white">
            Användarnamn:
          </label>
          <input
            className="rounded-md w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
            placeholder="Användarnamn"
            id="Username"
            type="text"
            required
            onChange={(ev) => setUserName(ev.target.value)}
          />

          <label htmlFor="Password" className="block mb-1 text-white">
            Lösenord:
          </label>
          <input
            className="rounded-md w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
            placeholder="Lösenord"
            id="Password"
            type="password"
            required
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>

        {error && (
          <p className="flex-wrap text-1xl font-bold text-red-600">
            Användarnamn eller lösenord matchar inte
          </p>
        )}

        <button
          className="rounded-md w-1/2 self-center my-4 bg-clightblue font-medium  border-2 border-transparent hover:border-white"
          type="submit"
        >
          Logga in
        </button>
        <button 
        className="text-white font-semibold text-1xl mb-3"
        onClick={() => {
          setLoginModalOpen(false)
          Router.push("/account")
        }}>
          Registrera användare?
          </button>
      </form>
    </div>
  );
};

export default LoginForm;
