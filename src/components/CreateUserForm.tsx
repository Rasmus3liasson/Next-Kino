import React from "react";

const CreateUserForm = () => {
  return (
    <form
      id="createUserForm"
      className="max-w-md mx-auto self-center px-5 my-5 rounded-2xl shadow-lg flex flex-col flex-grow justify-center bg-cblue"
    >
      <h1 className="p-5 mx-auto text-4xl text-white font-bold">Skapa konto</h1>

      <div className="w-[95%] mx-auto flex flex-col">
        <section className="flex space-x-2 mb-2">
          <div>
            <label htmlFor="fName" className="block mb-1 text-white">
              Förnamn:
            </label>
            <input
              id="fName"
              name="firstName"
              required
              type="password"
              className="w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
              placeholder="Förnamn"
            />
          </div>
          <div>
            <label htmlFor="lName" className="block mb-1 text-white">
              Efternamn:
            </label>
            <input
              id="lName"
              name="lastName"
              required
              type="password"
              className="w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
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
              id="uName"
              name="userName"
              required
              type="text"
              className="w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
              placeholder="Användarnamn"
            />
          </div>
          <div>
            <label htmlFor="eMail" className="block mb-1 text-white">
              E-mail:
            </label>
            <input
              id="eMail"
              required
              type="email"
              className="w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
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
              id="passwordInput"
              required
              type="password"
              className="w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue"
              placeholder="Lösenord"
            />
          </div>
          <div>
            <label htmlFor="confPassword" className="block mb-1 text-white">
              Bekräfta lösenord:
            </label>
            <input
              id="confPassword"
              required
              type="password"
              className="w-full mb-2 focus:outline-none focus:ring-0 border-4 border-transparent focus:border-clightblue blur:border-cligt"
              placeholder="Lösenord"
            />
          </div>
        </section>
        <div id="error" className="text-white text-lg"></div>

        <section className="flex  space-x-2 my-3">
          <label htmlFor="strNeter" className="w-1/2 text-white">
            Lösenordsstyrka{" "}
          </label>
          <meter
            id="strMeter"
            className="w-1/2"
            low={0}
            high={5}
            value=""
            max="4"
          ></meter>
        </section>

        <button
          id="submitBtn"
          className="my-4 w-1/2 self-center bg-clightblue font-semibold  border-2 border-transparent hover:border-white"
        >
          bekräfta
        </button>
      </div>
    </form>
  );
};

export default CreateUserForm;
