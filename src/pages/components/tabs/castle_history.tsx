import * as React from "react";
import s from "../../../styles/main.module.scss";

const CastleHistory = (): JSX.Element => (
  <div className={s.CastleHistory}>
    <h1>Castle History</h1>
    <h2>Summary</h2>
    <div>
      Castello del Trebbio is rumored to have been the place where the Pazzis
      hatched their plan to murder Lorenzo Medici and his brother Giuliano. The
      assassination attempt took place at the Cathedral of Florence (better
      known today as the Duomo) and although Giuliano died, Lorenzo survived.
      Lorenzo took ownership of all Pazzi properties, including Castello del
      Trebbio, thus consolidating his family’s control over Florence.
    </div>
    <h2>Detailed History</h2>
    <div>
      <div>
        The castle plays a role in a notable period of Florentine history.
        Florence is widely known for being the birthplace of the Renaissance,
        and it owes much of this legacy to the influence of the Medicis. During
        their time as de facto rulers of Florence, the House of Medici
        accumulated many enemies who were jealous of their wealth, influence,
        and power. Chief among them was the Pazzi family, who, in 1478, began
        plotting to murder Lorenzo and Giuliano de’ Medici, heirs to the Medici
        empire. It is believed that their plan was developed in secrecy in the
        halls of Castello del Trebbio. Initially, the plan was to poison the two
        brothers during a banquet at Villa Medici in Fiesole. However, Giuliano
        suddenly fell ill and could not attend the banquet, and the
        assassination was postponed to the following day.
      </div>
      <div>
        On Sunday, April 26th, 1478, the conspirators waited for Lorenzo and
        Giuliano to attend mass at the Cathedral of Santa Maria del Fiore. As
        the priest raised the consecrated Host and the congregation knelt and
        bowed their heads in reverence, the assassin leapt at their vulnerable
        targets. Armed with daggers and swords, the Pazzis and their allies
        managed to take the life of Giuliano de’ Medici at the altar. Lorenzo
        was wounded superficially at the base of his neck, but managed to escape
        to the sacristy and barricade the entrance. The congregation had fled in
        fear, but soon a crowd had assembled to disarm the conspirators and
        allow Lorenzo to escape alive.
      </div>
      <div>
        Shortly after, Lorenzo gave the order to hang all the conspirators in
        Palazzo della Signoria, as a display of the Medici supremacy. One of the
        conspirators, Iacopo De’ Pazzi, managed to escape Florence and take
        refuge temporarily in Castello del Trebbio, but was finally captured
        after he relocated to the Mugello countryside. The Pazzi family was
        abolished, and Lorenzo confiscated all their property, including
        Castello del Trebbio.
      </div>
      <div>
        The Medicis&apos; support of the arts and humanities turned Florence
        into the cradle of the Renaissance. The Medici family produced four
        popes, and their genes have been mixed into many of Europe’s royal
        families. The last Medici ruler died without a male heir in 1737, ending
        the family dynasty after almost 300 years.
      </div>
    </div>
  </div>
);

export default CastleHistory;
