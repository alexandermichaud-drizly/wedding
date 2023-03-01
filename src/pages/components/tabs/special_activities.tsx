import classNames from 'classnames';
import * as React from 'react';
import s from '../../../styles/main.module.scss';

const SpecialActivities = (): JSX.Element => (
  <div className={s.SpecialActivities}>
    <h1>Special Activities</h1>
    <div className={classNames(s.Infinity, s.Pool)}>
      <img
        src="https://imagedelivery.net/Xh-8qVol1Pftdals16ieKg/77fd4cc6-33ae-4f81-56b5-6a5afc66d300/public"
        alt="infinity_pool"
      ></img>
    </div>

    <div>
      In addition to the meals and events on the schedule, the activities below
      will be available.
    </div>
    <ul>
      <li>
        <span>Swimming:</span> There are three pools on the property, for
        exclusive use by all guests at no cost.
      </li>
      <li>
        <span>Hiking:</span> No cost. Maps available at the wine shop.
      </li>
      <li>
        <span>E-Bike:</span> A faster way to explore the grounds and nearby
        trails. Cost TBD.
      </li>
      <li>
        <span>Horseback Riding:</span> A leisurely ride on trails near the
        castle. Cost: 35 EUR per person.
      </li>
      <li>
        <span>Wine Tour:</span> Tour of two nearby wineries, with tastings and
        lunch included. Cost: 85 EUR per person. Transportation costs to and
        from the vineyards paid at the time of the tour. Exact transportation
        costs TBD.
      </li>
      <li>
        <span>Florence Guided Tour:</span> 3 hour walking tour of Florence in
        small groups, with a professional guide. Spanish-speaking tour guides
        available on request. Cost TBD.
      </li>
    </ul>
    <div>
      {' '}
      To book any activity, please contact us so that we can arrange the
      reservation and payment with the Castle. We can also help coordinate
      groups for tours and horseback rides.
    </div>
  </div>
);

export default SpecialActivities;
