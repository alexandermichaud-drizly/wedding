import * as React from "react";
import { Box, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import Photos from "./tabs/photos";
import RSVP from "./tabs/rsvp";
import Schedule from "./tabs/schedule";
import GettingThere from "./tabs/getting_there";
import Accommodations from "./tabs/accommodations";
import Gifts from "./tabs/gifts";
import FAQ from "./tabs/faq";
import Attire from "./tabs/attire";
import CastleHistory from "./tabs/castle_history";
import SpecialActivities from "./tabs/special_activities";
import cn from "classnames";
import s from "../../styles/drawer.module.scss";

export type SectionType = {
  label: string;
  content: JSX.Element;
};

export const Sections: SectionType[] = [
  {
    label: "Schedule",
    content: <Schedule />
  },
  {
    label: "Getting There",
    content: <GettingThere />
  },
  {
    label: "Accommodations",
    content: <Accommodations />
  },
  {
    label: "Attire",
    content: <Attire />
  },
  {
    label: "Gifts",
    content: <Gifts />
  },
  {
    label: "History of the Castle",
    content: <CastleHistory />
  },
  {
    label: "Special Activities",
    content: <SpecialActivities />
  },
  {
    label: "Venue Photos",
    content: <Photos version="venue" />
  },
  {
    label: "Engagement Photos",
    content: <Photos version="engagement" />
  },
  {
    label: "FAQ",
    content: <FAQ />
  },
  {
    label: "RSVP",
    content: <RSVP />
  }
];

export const drawer = (
  open: boolean,
  toggleDrawer: (newValue?: boolean) => () => void,
  onClickSection: (section: SectionType) => () => void
) => (
  <Drawer
    classes={{ paper: cn(s.Drawer, s.Root) }}
    anchor="left"
    open={open}
    onClose={toggleDrawer(false)}
  >
    <List>
      {Sections.map((section) => (
        <Box key={section.label.toLowerCase()} onClick={toggleDrawer()}>
          <ListItemButton onClick={onClickSection(section)}>
            <ListItemText
              classes={{ primary: cn(s.Drawer, s.Text) }}
              primary={section.label}
            />
          </ListItemButton>
        </Box>
      ))}
    </List>
  </Drawer>
);
