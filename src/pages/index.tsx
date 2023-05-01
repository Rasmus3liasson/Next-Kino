import Head from "next/head";
import Screening from '../components/screening'

const movieData = {
  id: 15515,
  date: 'thursday may 4th',
  title: "Bananarama",
  location: 'salong 4',
  spokenLang: 'ENG',
  subLang: 'SWE',
};

export default function Home() {
  console.log(movieData);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Kino project in next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div>
          <Screening movieData={movieData} />
        </div>
      </main>
    </>
  );
}
