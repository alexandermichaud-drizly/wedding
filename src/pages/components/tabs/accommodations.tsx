import s from '../../../styles/tabbed_content.module.scss';

type Event = {
  time: string;
  title: string;
}

type Day = {
  date: string;
  events: Event[];
};

const DAYS: Day[] = [
  {
    date: "Sunday, May 21",
    events: [
      {
        time: "2-6PM",
        title: "Guests Arrive",
      },
      {
        time: "6PM",
        title: "Welcome Cocktails + Castle Tour",
      },
      {
        time: "7PM",
        title: "Welcome Dinner, Courtesy of Mr. and Mrs. Zurita",
      },
    ]
  },
  {
    date: "Monday, May 22",
    events: [
      {
        time: "10AM",
        title: "American Breakfast on the Restaurant Terrace",
      },
      {
        time: "3PM",
        title: "Poolside Gelatto",
      },
      {
        time: "6PM",
        title: "Wood-Fired Pizza Dinner",
      },
    ],
  },
  {
    date: "Tuesday, May 23",
    events: [
      {
        time: "10AM",
        title: "Italian Breakfast on the Restaurant Terrace",
      },
      {
        time: "5PM",
        title: "Wedding Ceremony in the Castle Courtyard",
      },
      {
        time: "6PM",
        title: "Aperitivo in the Castle Gardens",
      },
      {
        time: "7PM",
        title: "Wedding Dinner",
      },
      {
        time: "10PM",
        title: "Drinks and Dancing",
      },
    ],
  },
  {
    date: "Wednesday, May 24",
    events: [
      {
        time: "11AM",
        title: "Brunch on the Restaurant Terrace",
      },
      {
        time: "4PM",
        title: "Italian Dessert Buffet",
      },
    ],
  },  
  {
    date: "Thursday, May 25",
    events: [
      {
        time: "9AM",
        title: "Guests Check Out",
      },
    ],
  },
];

const Schedule = (): JSX.Element => 
  <div className={s.Schedule}>
    {DAYS.map(day => 
      <div className={s.Day}>
        <h1>{day.date}</h1>
        <div>
          {day.events.map(event => 
            <div className={s.Event}>
              <div>
                {event.time}
              </div>
              <div>
                {event.title}
              </div>
            </div>
          )}
        </div>
      </div>
    )}
  </div>;

export default Schedule;
