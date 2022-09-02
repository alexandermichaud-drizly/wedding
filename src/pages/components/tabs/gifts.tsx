import * as React from 'react';
import s from '../../../styles/main.module.scss';

const venmoSrc =
  'https://imagedelivery.net/Xh-8qVol1Pftdals16ieKg/3e954264-7c4d-4fc6-605a-09280385b200/public';
const paypalSrc =
  'https://imagedelivery.net/Xh-8qVol1Pftdals16ieKg/69fbe449-d286-40f3-b3f1-8aca6ec10000/public';
const venmoLink = 'https://venmo.com/code?user_id=1702589049602048491';
const paypalLink = 'https://paypal.me/andreaandalexander';

const Gifts = (): JSX.Element => {
  return (
    <div>
      <h1>Gifts</h1>
      <div>
        Making the journey to Italy is more than we could ever expect from our
        guests, so please do not feel obligated to give us anything more. The
        greatest gift we can receive is your presence on our special day.
      </div>
      <div>
        We recently purchased our dream home, so if you are inclined to give us
        something, we would greatly appreciate contributions toward the cost of
        furnishings, repairs, and upkeep. Click on or scan the QR codes below to
        send a gift online, or else feel free to get in touch with us directly.
      </div>
      <div className={s.QRCodes}>
        <div className={s.Code}>
          <a href={paypalLink}>
            <img className={s.PayPal} src={paypalSrc} alt="PayPal QR Code" />
          </a>
        </div>
        <div className={s.Code}>
          <a href={venmoLink}>
            <img className={s.Venmo} src={venmoSrc} alt="Venmo QR Code" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
