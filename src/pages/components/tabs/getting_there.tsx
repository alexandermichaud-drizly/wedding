import * as React from 'react';
import s from '../../../styles/main.module.scss';

const transportation =
  "Regardless of your travel plans, contact us when you have determined when and how you'll arrive. We can help you arrange transportation that's offered by the venue.";
const flying =
  'The most convenient point of entry will be the Florence airport (FLO). You will almost certainly have to stop over in a larger European city on the way.';
const trains =
  'If you are travelling in Italy beforehand, you might also consider arriving by train. We are also able to arrange transportation from the Santa Maria Novella station.';
const driving =
  'The castle is approximately a half hour drive from Florence. Transportation arranged through us will be able drop you off at the door of your villa. We do not recommend arranging a private taxi or uber to the castle. They will be more expensive and will not be able to take you directly to the villa in which you are staying. Let us save you the trouble of bringing your bags up the hill!';

const GettingThere = (): JSX.Element => (
  <div>
    <h1>Getting There</h1>
    <div>{transportation}</div>
    <div>{flying}</div>
    <div>{trains}</div>
    <div>{driving}</div>
  </div>
);

export default GettingThere;
