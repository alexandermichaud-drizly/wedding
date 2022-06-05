import s from '../../../styles/tabbed_content.module.scss';

const placeholder = "Guests will be able to RSVP through the site later this summer. We'll let you know when it's ready!"

const RSVP = (): JSX.Element => 
  <div className={s.RSVP}>
    {placeholder}
  </div>;

export default RSVP;
