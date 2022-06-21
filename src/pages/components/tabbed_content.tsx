import {  } from '@mui/material';
import s from '../../styles/tabbed_content.module.scss';
import Photos from './tabs/photos';
import RSVP from './tabs/rsvp';
import Schedule from './tabs/schedule';
import GettingThere from './tabs/getting_there';
import Accommodations from './tabs/accommodations';
import Gifts from './tabs/gifts';
import FAQ from './tabs/faq';
import Attire from './tabs/attire';
import CastleHistory from './tabs/castle_history';
import SpecialActivities from './tabs/special_activities';

export type TabType = {
  label: string;
  content: JSX.Element;
};

export const TABS: TabType[] = [
  {
    label: "Schedule",
    content: <Schedule />,
  },
  {
    label: "Getting There",
    content: <GettingThere />,
  },
  {
    label: "Accommodations",
    content: <Accommodations />,
  },
  {
    label: "Attire",
    content: <Attire />,
  },
  {
    label: "Gifts",
    content: <Gifts />,
  },
  {
    label: "History of the Castle",
    content: <CastleHistory />,
  },
  {
    label: "Special Activities",
    content: <SpecialActivities />,
  }, 
  {
    label: "Venue Photos",
    content: <Photos version="venue" />,
  },
  {
    label: "Engagement Photos",
    content: <Photos version="engagement" />,
  },
  {
    label: "FAQ",
    content: <FAQ />,
  },
  {
    label: "RSVP",
    content: <RSVP />,
  },
];
