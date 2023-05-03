import React from 'react'
import "../styles/globals.scss"

type Props = {}

const LoginForm = (props: Props) => {
  return (
    <form id="login" className="mt-6 max-w-md mx-4 self-center px-5 rounded-2xl shadow-lg flex flex-col flex-grow justify-center bg-cblue">
        <h1 className="p-5 mx-auto text-4xl text-white font-bold">Logga in</h1>

        <div className="w-[70%] mx-auto">
            <label htmlFor="Username" className="block mb-1 text-white">Användarnamn:</label>
            <input id="Username" required type="text" className="w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue" placeholder="Användarnamn"/> 

            <label htmlFor="Password" className="block mb-1 text-white">Lösenord:</label>
            <input id="Password" required type="password" className="w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue" placeholder="Lösenord"/>
        </div>

        <button className="w-1/2 self-center my-4 bg-clightblue font-semibold  border-2 border-transparent hover:border-white">Logga in</button>
    </form>
  );
}

export default LoginForm;