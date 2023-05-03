import style from './Screening.module.css';

export type ScreeningType = {
  id: number;
  date: string;
  title: string;
  location: string;
  spokenLang: string;
  subLang: string;
};

export default function Screening({movieData}: { movieData: ScreeningType }) {
    console.log(movieData);
    return (
    <>
      <h3 style={style.bold}>{movieData.title}</h3>
      <span>{movieData.date}</span>
      <span>{movieData.location}</span>
    </>
  );
}
