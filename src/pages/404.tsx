import Link from "next/link";

export default function Custom404() {
  return (
    <section className="section">
      <h1 className="error">404</h1>
      <div className="page">Ooops!!! Vi kunde inte hitta denna sida</div>
      <Link className="back-home" href="/">
        Back to home
      </Link>
    </section>
  );
}
