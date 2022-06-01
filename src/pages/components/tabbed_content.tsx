import React from 'react';
import { Tabs, Tab } from '@mui/material';
import s from '../../styles/tabbed_content.module.scss';
import cn from 'classnames';
import Photos from './tabs/photos';
import RSVP from './tabs/rsvp';
import Schedule from './tabs/schedule';
import GettingThere from './tabs/getting_there';
import Accommodations from './tabs/accommodations';
import Gifts from './tabs/gifts';
import FAQ from './tabs/faq';
import Attire from './tabs/attire';
import CastleHistory from './tabs/castle_history';


const TABS = [
  {
    props: { label: "Schedule" },
    content: <Schedule />,
  },
  {
    props: { label: "Getting There" },
    content: <GettingThere />,
  },
  {
    props: { label: "Accommodations" },
    content: <Accommodations />,
  },
  {
    props: { label: "Attire" },
    content: <Attire />,
  },
  {
    props: { label: "Gifts" },
    content: <Gifts />,
  },
  {
    props: { label: "History of the Castle" },
    content: <CastleHistory />,
  },
  {
    props: { label: "Venue Photos" },
    content: <Photos />,
  },
  {
    props: { label: "Engagement Photos" },
    content: <Photos />,
  },
  {
    props: { label: "FAQ" },
    content: <FAQ />,
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
      <Tabs classes={{ indicator: cn(s.Tabs, s.Indicator), flexContainer: cn(s.Tabs, s.FlexContainer) }} onChange={handleChange} value={value}>
        {TABS.map(tab =>
          <Tab 
            {...tab.props}  
            classes={{ root: cn(s.Tabs, s.Tab, s.TabColor), selected: cn(s.Tabs, s.Tab, s.Selected) }}
          />
        )}
      </Tabs>
      {TABS.map((tab, index) => value === index ? (
          <div className={s.TabContent}>
            {tab.content}
          </div>
        ) : <></>
      )}
    </div>
  );
};

export default TabbedSection;