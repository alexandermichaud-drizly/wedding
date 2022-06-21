import s from '../../../styles/main.module.scss';

const expectations = "Making the journey to Italy is more than we could ever expect from our guests, so please do not feel obligated to give us anything more. The greatest gift we can receive is your presence on our special day.";
const request = "We are currently in the process of searching for a home in DC, so if you are strongly inclined to give us something, we would greatly appreciate contributions to our home fund. Anything helps, but again, nothing is expected."
const reachOut = "It's most helpful financially if the gift is earmarked for a downpayment, so if you are interested, please reach out to us to coordinate."

const Gifts = (): JSX.Element => 
  <div className={s.GiftsCopy}>
    <div>
      {expectations}
    </div>
    <div>
      {request}
    </div>
    <div>
      {reachOut}
    </div>
  </div>;


export default Gifts;
