import * as React from 'react';
import s from '../../../styles/main.module.scss';

const placeholder = "The second day of the festivities will afford guests time for special activities and excursions, e.g. horseback riding, Italian cooking classes, etc. We'll let you know when you can book spots!"

const SpecialActivities = (): JSX.Element => 
  <div className={s.SpecialActivities}>
    <div className={s.RSVP}>
      {placeholder}
    </div>;
  </div>;

export default SpecialActivities;
