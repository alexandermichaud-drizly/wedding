import * as React from 'react';
import s from '../../../styles/main.module.scss';
import Venmo from '../../../assets/venmo_qr.png';
import PayPal from '../../../assets/paypal_qr.png';

const Gifts = (): JSX.Element => {
  return (
    <div>
      <div>
        Making the journey to Italy is more than we could ever expect from our
        guests, so please do not feel obligated to give us anything more. The
        greatest gift we can receive is your presence on our special day.
      </div>
      <div>
        We recently purchased our dream home, so if you are strongly inclined to
        give us something, we would greatly appreciate contributions that will
        go toward furnishings, repairs, and upkeep. Anything helps, but again,
        nothing is expected.
      </div>
      <img src={Venmo} alt="Venmo QR Code" />
      <img src={PayPal} alt="PayPal QR Code" />
    </div>
  );
};

export default Gifts;
