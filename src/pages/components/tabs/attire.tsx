import * as React from 'react';
import s from '../../../styles/main.module.scss';
import cn from 'classnames';

type Occasion = {
  title: string;
  general: string;
  men: string;
  women: string;
};

const occasions: Occasion[] = [
  {
    title: 'Welcome Dinner',
    general: 'White Night',
    men: 'Jackets, Slacks / Chinos. Ties optional.',
    women: 'Cocktail Dresses or Sun Dresses.',
  },
  {
    title: 'Throughout the Week',
    general: 'Comfortable',
    men: 'Bathing suits welcome. Summer wear recommended.',
    women: 'Bathing suits welcome. Summer wear recommended.',
  },
  {
    title: 'Wedding Dinner',
    general: 'Black Tie',
    men: 'Tuxedos.',
    women: 'Long Dresses.',
  },
];

const Attire = (): JSX.Element => (
  <div className={s.Attire}>
    <h1>Attire</h1>
    {occasions.map((occasion) => (
      <div className={s.AttireOccasion} key={occasion.title.toLowerCase()}>
        <h2>
          {occasion.title}: {occasion.general}
        </h2>
        <div>
          <span className={s.Gender}>Gentlemen: </span>
          {occasion.men}
        </div>
        <div>
          <span className={s.Gender}>Ladies: </span>
          {occasion.women}
        </div>
      </div>
    ))}
  </div>
);

export default Attire;
