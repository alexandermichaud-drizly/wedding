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
    general: 'Semi-Formal',
    men: 'Jackets, Slacks. Ties optional.',
    women: 'Cocktail Dresses.',
  },
  {
    title: 'Throughout the Week',
    general: 'Comfortable',
    men: 'Bathing suits welcome. Summer wear and comfortable shoes recommended.',
    women:
      'Bathing suits welcome. Summer wear and comfortable shoes recommended.',
  },
  {
    title: 'Wedding Dinner',
    general: 'Black Tie',
    men: 'Tuxedos.',
    women: 'Midi or Long Dresses.',
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
        {occasion.men === occasion.women ? (
          <div>
            <span className={s.Gender}>Ladies and Gentlemen: </span>
            {occasion.men}
          </div>
        ) : (
          <>
            <div>
              <span className={s.Gender}>Ladies: </span>
              {occasion.women}
            </div>
            <div>
              <span className={s.Gender}>Gentlemen: </span>
              {occasion.men}
            </div>
          </>
        )}
      </div>
    ))}
  </div>
);

export default Attire;
