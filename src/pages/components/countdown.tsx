
import s from '../../styles/main.module.scss'

const Countdown = (): JSX.Element => {
 
  const today = new Date();
  const MAY_21 = new Date(2023, 4, 21);
  const ONE_DAY = 1000*60*60*24;

  const days = Math.ceil((MAY_21.getTime()-today.getTime())/(ONE_DAY));

  return <div className={s.Countdown}>The celebration begins in {days} days!</div>;
};

export default Countdown;