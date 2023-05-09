import * as React from 'react';
import s from '../../styles/main.module.scss';

const Countdown = (): JSX.Element => {
  const today = new Date();
  const MAY_21 = new Date(2023, 4, 23);
  const ONE_DAY = 1000 * 60 * 60 * 24;

  const days = Math.ceil((MAY_21.getTime() - today.getTime()) / ONE_DAY);

  return days ? (
    <div className={s.Countdown}>Only {days} days until the ceremony!</div>
  ) : days < 0 ? (
    <div className={s.Countdown}>The ceremony is today!</div>
  ) : (
    <div className={s.Countdown}>It&apos;s official! They&apos;re married!</div>
  );
};

export default Countdown;
