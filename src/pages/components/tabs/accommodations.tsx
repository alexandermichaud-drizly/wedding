import * as React from 'react';
import s from '../../../styles/main.module.scss';

const Accommodations = (): JSX.Element => (
  <div className={s.Accommodations}>
    <h1>Accommodations</h1>
    <div>
      The castle is situated in the rustic Tuscan countryside. What were
      originally farmhouses serving the vineyards and the estate have now been
      fully renovated into villas and apartments.
    </div>
    <div>
      During our stay, our wedding party will have the entire property for
      exclusive use, meaning that we will be the only ones staying in the villas
      and apartments. All accommodations are on the property, no more than a 5
      minute walk to the castle. Each has a living room and a kitchen, and the
      villas include larger common areas which can be enjoyed by any guests
      regardless of where they are staying. There are also three pools for
      shared use on the property.
    </div>
    <div>
      We will be arranging the rooming assignments ourselves, placing groups of
      friends and groups of family together. Even with our modest guest list, we
      are filling all available living quarters on the property, so single
      guests should be prepared for double occupancy rooms. If you have specific
      questions about your accommodations, feel free to reach out to us
      directly.
    </div>
  </div>
);

export default Accommodations;
