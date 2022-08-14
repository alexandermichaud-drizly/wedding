import * as React from 'react';
import s from '../../../styles/main.module.scss';

const Gifts = (): JSX.Element => (
  <div className={s.GiftsCopy}>
    <div>
      Making the journey to Italy is more than we could ever expect from our
      guests, so please do not feel obligated to give us anything more. The
      greatest gift we can receive is your presence on our special day.
    </div>
    <div>
      We recently purchased a home in DC, so if you are strongly inclined to
      give us something, we would greatly appreciate contributions that will go
      toward furnishings, repairs, and upkeep. Anything helps, but again,
      nothing is expected.
    </div>
  </div>
);

export default Gifts;
