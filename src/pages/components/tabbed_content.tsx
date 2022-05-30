import React from 'react';
import { Tabs, Tab } from '@mui/material';
import s from '../../styles/tabbed_content.module.scss';
import cn from 'classnames'

const TABS = [
  {
    props: { label: "Location and Schedule" },
    content: <></>,
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
      {TABS.map((tab, index) => 
        <div hidden={value !== index}>
          {tab.content}
        </div>
      )}
    </div>
  );
};

export default TabbedSection;