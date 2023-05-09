import * as React from 'react';

type Faq = {
  question: string;
  answer: JSX.Element;
};

const faqs: Faq[] = [
  {
    question: 'What meals are included?',
    answer: (
      <div>
        See the meal schedule below:
        <ul>
          <li>May 21st (Arrival and check-in): Traditional Tuscan Dinner</li>
          <li>
            May 22nd (Free Day): American Breakfast Buffet, Lunch of Grilled
            Italian Meats, Wood-Fired Oven Pizza Dinner
          </li>
          <li>
            May 23rd (Wedding Day): Italian Breakfast Buffet, Take-away Paninis,
            Aperitivo, Wedding Feast
          </li>
          <li>May 24th (Hangover Day): Italian Brunch Buffet, Gelato Cart</li>
          <li>May 25th (Checkout): None – Checkout by 9AM at the Wine Shop</li>
        </ul>
        PLEASE NOTE: The wedding dinner is a multi-course, traditional Italian
        feast with generous portions. We know because we tried it ourselves. We
        strongly recommend you save your appetite on the wedding day, but for
        those who will need something to hold them over, we&apos;re providing
        take-away paninis that afternoon.
      </div>
    ),
  },
  {
    question: 'What if I would like more food?',
    answer: (
      <div>
        <div>
          <div>
            Kitchens will be stocked with some snacks and coffee. There are
            grocery stores a short driving distance (see below) where additional
            groceries can be bought. There will be daily grocery runs for which
            you’ll also be able to put in requests. Every villa or apartment has
            at least one fully equipped kitchen (including stove, oven,
            microwave, fridge, freezer, and coffee maker).
          </div>
          <div>
            Cooperativa Di Consumo (5 min drive, small grocery store): Via
            Fratelli Carli, 41, 50065 Molino del Piano
          </div>
          <div>
            Unicoop (14 min drive, large supermarket): 3, Piazza Alfredo e Carlo
            del Vivo, 1, 50065 Pontassieve
          </div>
        </div>
      </div>
    ),
  },
  {
    question: 'What drinks are included?',
    answer: (
      <div>
        Wine is included with the welcome dinner, lunch and dinner on the second
        day, and the wedding feast. The castle&apos;s sparkling wine (Vino
        Spumante di Qualità Brut Metodo Classico) will be served with the
        wedding aperitivo, and an open bar during the wedding party.
      </div>
    ),
  },
  {
    question: 'Where can I purchase more to drink?',
    answer: (
      <div>
        <div>
          All wine consumed on the premises must be purchased through the
          Castle. The Castle wine shop sells wines they produce on-site, as well
          as bottles from other wineries across Italy. In our humble opinion,
          the wines are consistently of stellar quality. Prices start at $10 EUR
          a bottle.
        </div>
        <div>
          Spirits, beer, and all types of alcohol besides wine can be brought in
          and consumed around the property without restriction.
        </div>
      </div>
    ),
  },
  {
    question:
      'What are the surfaces around the Castle like? What shoes should I wear?',
    answer: (
      <div>
        The path in between the villas / apartments and the main restaurant and
        Castle (where the wedding ceremony will be held) is not paved, but
        gravel or grass, so please bring comfortable shoes! For the wedding
        night, for women who plan to wear heels, we’d recommend considering
        wedges (given that the aperitivo will be on the grass courtyard).
      </div>
    ),
  },
  {
    question: 'What other clothing should I bring?',
    answer: (
      <div>
        Swimsuits! And active wear if you want to take advantage of the outdoor
        activities. There are three pools, walking and hiking trails, bikes,
        etc., so make sure to bring some comfortable clothes in addition to the
        wedding attire!
      </div>
    ),
  },
  {
    question: 'What is there to do around the area?',
    answer: (
      <div>
        <div>
          Oh, where to start?! We&apos;ve curated some activities on / near the
          Castle grounds, such as horseback riding and vineyard tours, that
          individuals and small groups can participate in on the second or
          fourth days. See the &quot;Special Activities&quot; tab for more
          details.
        </div>
        <div>
          We know that many will want to travel the area before / after the
          wedding, so here are some nearby highlights:
          <ul>
            <li>Fiesole: 20 mins drive</li>
            <li>Florence: 30 mins drive</li>
            <li>San Gimignano: ~1 hour drive</li>
            <li>Siena: ~1 hour drive</li>
            <li>Pisa: 1 hour & 20 mins drive</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: 'Are there taxis available for short trips?',
    answer: (
      <div>
        Yes. The castle reception can arrange a taxi for you with about twenty
        minutes&apos; notice.
      </div>
    ),
  },
];

const FAQ = (): JSX.Element => (
  <div>
    <h1>FAQ</h1>
    {faqs.map((faq) => (
      <div key={faq.question.toLowerCase()}>
        <h2>{faq.question}</h2>
        <div>{faq.answer}</div>
      </div>
    ))}
  </div>
);

export default FAQ;
