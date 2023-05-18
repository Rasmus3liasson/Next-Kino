import Head from "next/head";
import style from "./style.module.scss";

export default function Opening() {
  return (
    <>
      <Head>
        <title>Lule Northern Light Cinema</title>
        <meta name="description" content="Our opening hours" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className={style.openingHours}>
        <h1>Öppetider och Kontakt</h1>
        <h2>Våra Öppetider</h2>
        <ul>
          <li>Måndag: 10.00-21.00</li>
          <br />
          <li>Tisdag: 10.00-21.00</li>
          <br />
          <li>Onsdag: 10.00-21.00</li>
          <br />
          <li>Torsdag: 10.00-21.00</li>
          <br />
          <li>Fredag: 10.00-23.00</li>
          <br />
          <li>Lördag: 10.00-23.00</li>
          <br />
          <li>Söndag: 10.00-20.00</li>
          <br />
          <li className={style.avikande}>
            Avikande öppettider: Röda dagar: 11.00 - 22.00
          </li>
        </ul>
        <br />
        <br />
        <h2 className={style.contactUs}>Kontakta oss</h2>
        <ul className={style.contactInfo}>
          <li>Telefonnummer: 010-7308579</li>
          <li>
            E-mail: <u>info@lnlcinema.com</u>
          </li>
          <li>Support öppettider: Måndag - Fredag: 09.00 - 17</li>
        </ul>

        <h2 className={style.hyra}>Vi hyr ut!</h2>
        <p>
          Våra salonger går även att hyra ut! <br />
          Kontakta oss via
          <u>boka@lnlcinema.com</u>
        </p>
      </section>
    </>
  );
}
