import * as React from 'react';
import s from '../../../styles/main.module.scss';

const SpecialActivities = (): JSX.Element => (
  <div>
    <div>
      In addition to the meals and events on the schedule, the activities below
      will be available.
    </div>
    <ul>
      <li>
        <span>Hiking:</span> No cost. Maps available at the wine shop.
      </li>
      <li>
        <span>E-Bike:</span> Traverse the grounds and nearby trails with speed
        and ease. Cost TBD.
      </li>
      <li>
        <span>Horseback Riding:</span> A leisurely ride on trails near the
        castle. Cost: 35 EUR per person.
      </li>
      <li>
        <span>Wine Tour:</span> Tour of two nearby wineries, with tastings and
        lunch included. Cost: 85 EUR per person. Transportation costs to and
        from the vineyards paid at the time of the tour, estimated [TODO FILL IN
        COST].
      </li>
      <li>
        <span>Florence Guided Tour:</span> 3 hour walking tour of Florence in
        small groups, with a professional guide. Cost TBD.
      </li>
      <li>
        <span>Cooking Class (min. 4 people):</span>
        <ul>
          <li>
            Option A: Pasta lesson that lasts 1 hour. After the lesson with the
            chef, you will enjoy the pasta you have made along with Tuscan
            antipasti and wine (1 bottle per 4 people).
          </li>
          <li>
            Option B: 4 Course lesson, including tuscan antipasti, tagliatelle
            with vegetables, chicken with Tuscan sweet wine, and dessert cake.
            The meal comes with two wines with dinner and a dessert wine.
          </li>
          <li>
            Cost
            <ul>
              <li>
                Premium Option: Includes a private room for the lunch.
                <ul>
                  <li>Option A: 70 EUR</li>
                  <li>Option B: 100 EUR</li>
                </ul>
              </li>
              <li>
                &quot;Take-Away&quot; Option: Enjoy the food at your
                accommodations after the class is over.
                <ul>
                  <li>Option A: 50 EUR</li>
                  <li>Option B: 80 EUR</li>
                </ul>
              </li>
              <li>
                Meal Option: Skip the lesson itself, but enjoy the homemade
                pasta lunch (the participants will make more than 4 portions).
                <ul>
                  <li>Option A: 35 EUR</li>
                  <li>Option B: 50 EUR</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <div>
      {' '}
      To book any activity, please contact us so that we can arrange the
      reservation and payment with the Castle. We can also help coordinate
      groups for tours, cooking classes, and horseback rides.
    </div>
  </div>
);

export default SpecialActivities;
