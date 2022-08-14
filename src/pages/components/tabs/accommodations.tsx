import * as React from 'react';
import s from '../../../styles/main.module.scss';

const assignments = "Once we have our final guest list, we will select in which room you'll be staying, grouping family and friends where possible. In order to house all invitees on the castle property, we will ask some younger guests to share rooms with one another.";

const Accommodations = (): JSX.Element => 
  <div className={s.Accommodations}>
    <div>{assignments}</div>
  </div>;

export default Accommodations;
