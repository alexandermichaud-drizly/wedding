import * as React from 'react';
import s from '../../../styles/main.module.scss';

const mailToLink = 'mailto:rsvp@andrea-alexander.wedding?subject=RSVP';

const RSVP = (): JSX.Element => (
  <div>
    <div>
      We ask that you RSVP by November 30, 2022 by emailing us at{' '}
      <a href={mailToLink}>rsvp@andrea-alexander.wedding</a>.
    </div>
    <div>
      If your Save-the-Date was addressed to multiple invitees, please specify
      if everyone listed can attend.
    </div>
  </div>
);

export default RSVP;
