import * as React from 'react';
import s from '../../../styles/main.module.scss';

const SpecialActivities = (): JSX.Element => (
  <div className={s.SpecialActivities}>
    <h1>Special Activities</h1>
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
        from the vineyards paid at the time of the tour. Exact transportation
        costs TBD.
      </li>
      <li>
        <span>Florence Guided Tour:</span> 3 hour walking tour of Florence in
        small groups, with a professional guide. Cost TBD.
      </li>
      <li>
        <span>Cooking Class (min. 4 people):</span>
        <ul>
          <li>
            Pasta Lesson: Enjoy pasta you have made along with Tuscan antipasti
            and wine (1 bottle per 4 people).
          </li>
          <li>
            4 Course Meal Lesson: Learn to make tuscan antipasti, tagliatelle
            with vegetables, chicken with Tuscan sweet wine, and dessert cake.
            The meal comes with two wines with dinner and a dessert wine.
          </li>
          <li>
            Cost:
            <ul>
              <li>
                Premium Option: Includes a private room for the lunch.
                <ul>
                  <li>Pasta Lesson: 70 EUR</li>
                  <li>4 Course Meal: 100 EUR</li>
                </ul>
              </li>
              <li>
                &quot;Take-Away&quot; Option: Enjoy the food at your
                accommodations after the class is over.
                <ul>
                  <li>Pasta Lesson: 50 EUR</li>
                  <li>4 Course Meal: 80 EUR</li>
                </ul>
              </li>
              <li>
                Meal Option: Skip the lesson itself, but enjoy the homemade
                pasta lunch (the participants will make more than 4 portions).
                <ul>
                  <li>Pasta Lesson: 35 EUR</li>
                  <li>4 Course Meal: 50 EUR</li>
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
