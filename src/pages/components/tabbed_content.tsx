import React from 'react';
import { Tabs, Tab } from '@mui/material';
import s from '../../styles/tabbed_content.module.scss';
import cn from 'classnames';
import VenuePhotos from './tabs/venue_photos';
import EngagementPhotos from './tabs/engagement_photos';
import RSVP from './tabs/rsvp';
import Schedule from './tabs/schedule';

const TABS = [
  {
    props: { label: "Schedule" },
    content: <Schedule />,
  },
  {
    props: { label: "Engagement Photos" },
    content: <EngagementPhotos />,
  },
  {
    props: { label: "Venue Photos" },
    content: <VenuePhotos />,
  },
  {
    props: { label: "RSVP" },
    content: <RSVP />,
  },
];


const TabbedSection = (): JSX.Element => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={s.Container}>
      <Tabs classes={{ indicator: cn (s.Tabs, s.Indicator) }} onChange={handleChange} value={value}>
        {TABS.map(tab =>
          <Tab 
            {...tab.props}  
            classes={{ root: cn(s.Tabs, s.Tab, s.TabColor) }}
          />
        )}
      </Tabs>
      {TABS.map((tab, index) => value === index ? (
          <div>
            {tab.content}
          </div>
        ) : <></>
      )}
    </div>
  );
};

export default TabbedSection;