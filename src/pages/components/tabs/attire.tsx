import s from '../../../styles/tabbed_content.module.scss';

type Occasion = {
  title: string;
  general: string;
  men: string;
  women: string;
};

const occasions: Occasion[] = [
  {
    title: "Welcome Dinner",
    general: "Summer Cocktail Attire",
    men: "Jackets, Slacks / Chinos. Ties optional.",
    women: "Cocktail Dresses or Sun Dresses."
  }
];

const Attire = (): JSX.Element => 
  <div className={s.Attire}>
    {occasions.map(occasion => 
      <div>
        <h1>{occasion.title}</h1>
        <div>{occasion.general}</div>
        <div>{`Gentlemen: ${occasion.men}`}</div>
        <div>{`Ladies: ${occasion.women}`}</div>
      </div>
    )}
  </div>;


export default Attire;
