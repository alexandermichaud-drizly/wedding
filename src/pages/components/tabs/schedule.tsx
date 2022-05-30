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
        title: "Welcome Dinner, Courtesy of Mr. and Mrs. Zurita",
      },
    ]
  },
  {
    date: "Monday, May 22",
    events: [
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
        time: "5PM",
        title: "Wedding Ceremony",
      },
    ],
  },
  {
    date: "Wednesday, May 24",
    events: [
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
        time: "12PM",
        title: "Guests Check Out",
      },
    ],
  },
];

const Schedule = (): JSX.Element => 
  <div className={s.Schedule}>
    {DAYS.map(day => 
      <div className={s.Event}>
        <h1>{day.date}</h1>
        <div>
          {day.events.map(event => 
            <div className={s.Event}>
              <div className={s.EventDetails}>
                {event.time}
              </div>
              <div className={s.EventDetails}>
                {event.title}
              </div>
            </div>
          )}
        </div>
      </div>
    )}
  </div>;

export default Schedule;
