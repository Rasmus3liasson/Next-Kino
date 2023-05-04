import style from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type ScreeningType = {
  id: number;
  date: string;
  title: string;
  location: string;
  spokenLang: string;
  subLang: string;
  poster: string;
};

export default function Screening({movieData}: { movieData: ScreeningType }) {
    return (
    <Link style={{textDecoration: 'none'}} href='/' className={style.card}>
      <Image className={style.img} height={120} width={90} src={'/dummy.jpg'} alt={`The poster for ${movieData.title}`} />
      <h3 className={`${style.title} ${style.cardItem}`}>{movieData.title}</h3>
      <small className={`${style.date} ${style.cardItem}`}>{movieData.date}</small>
      <small className={`${style.location} ${style.cardItem}`}>{movieData.location}</small>
    </Link>
  );
}
