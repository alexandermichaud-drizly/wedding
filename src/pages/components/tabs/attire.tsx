import s from '../../../styles/tabbed_content.module.scss';
import cn from 'classnames';

type Occasion = {
  title: string;
  general: string;
  men: string;
  women: string;
};

const occasions: Occasion[] = [
  {
    title: "Welcome Dinner",
    general: "White Night",
    men: "Jackets, Slacks / Chinos. Ties optional.",
    women: "Cocktail Dresses or Sun Dresses."
  },
  {
    title: "Throughout the Week",
    general: "Comfortable",
    men: "Bathing suits welcome. Summer wear recommended.",
    women: "Bathing suits welcome. Summer wear recommended."
  }, 
  {
    title: "Wedding Dinner",
    general: "Black Tie Optional",
    men: "Suit and Tie. Tuxedo optional.",
    women: "Cocktail Dresses or Long Dresses."
  }
];

const Attire = (): JSX.Element => 
  <div className={s.Attire}>
    {occasions.map(occasion => 
      <div className={cn(s.Occasion, s.Container)}>
        <h1 className={cn(s.Occasion, s.Title)}>{occasion.title}</h1>
        <div className={cn(s.Occasion, s.Subtitle)}>{occasion.general}</div>
        <div><span className={s.Gender}>Gentlemen: </span>{occasion.men}</div>
        <div><span className={s.Gender}>Ladies: </span>{occasion.women}</div>
      </div>
    )}
  </div>;


export default Attire;
