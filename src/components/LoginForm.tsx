import React, { FC, useState } from "react";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className="my-5 max-w-md mx-auto self-center px-5 rounded-2xl shadow-lg flex flex-col flex-grow justify-center bg-cblue"
      onSubmit={(ev) => {
        ev.preventDefault();
        fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName: userName, password: password }),
        });
      }}
    >
      <h1 className="p-5 mx-auto text-4xl text-white font-bold">Logga in</h1>

      <div className="w-[70%] mx-auto">
        <label htmlFor="Username" className="block mb-1 text-white">
          Användarnamn:
        </label>
        <input
          className="w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
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
          className="w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
          placeholder="Lösenord"
          id="Password"
          type="password"
          required
          onChange={(ev) => setPassword(ev.target.value)}
        />
      </div>

      <button
        className="w-1/2 self-center my-4 bg-clightblue font-semibold  border-2 border-transparent hover:border-white"
        type="submit"
      >
        Logga in
      </button>
    </form>
  );
};

export default LoginForm;
