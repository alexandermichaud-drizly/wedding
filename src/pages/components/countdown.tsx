import * as React from 'react';
import s from '../../styles/main.module.scss';

const Countdown = (): JSX.Element => {
  const today = new Date();
  const nextYear = today.getFullYear() + 1;
  const MAY_23 = new Date(nextYear, 4, 23);
  const ONE_DAY = 1000 * 60 * 60 * 24;

  const days = Math.ceil((MAY_23.getTime() - today.getTime()) / ONE_DAY);

  return (
    <div className={s.Countdown}>
      Only {days} days until our {nextYear - 2023} year anniversary!
    </div>
  );
};

export default Countdown;
