import * as React from 'react';
import s from '../../../styles/main.module.scss';
import RsvpModel from '../../../models/rsvp';
import { TextField } from '@mui/material';

const mailToLink = 'mailto:rsvp@andrea-alexander.wedding?subject=RSVP';

const RSVP = (): JSX.Element => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [errors, setErrors] = React.useState({
    firstName: '',
    lastName: '',
    lookup: '',
  });

  const handleFirstNameChange = (e: any) => {
    setErrors({ ...errors, firstName: '' });
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e: any) => {
    setErrors({ ...errors, lastName: '' });
    setLastName(e.target.value);
  };

  const handleSearchName = () => {
    if (!firstName) setErrors({ ...errors, firstName: 'Enter a first name' });
    if (!lastName) setErrors({ ...errors, firstName: 'Enter a last name' });
    if (!errors.firstName || !errors.lastName) return;
    // RsvpModel.findAll({ where: { first_name: , last_name:  } })
  };

  return (
    <div className={s.RsvpContainer}>
      <h1>RSVP</h1>
      <div>
        We ask that you RSVP by November 30, 2022 by contacting Andrea via{' '}
        <a href="https://wa.me/13053363092">WhatsApp</a>, or by emailing us at{' '}
        <a href={mailToLink}>rsvp@andrea-alexander.wedding</a>.
      </div>
      <div>
        If your Save-the-Date was addressed to multiple invitees, please specify
        if everyone listed can attend.
      </div>
      <div className={s.TextFields}>
        <TextField
          label="First Name"
          InputProps={{ onChange: handleFirstNameChange }}
          error={!!errors.firstName}
          helperText={errors.firstName}
        />
        <TextField
          label="Last Name"
          InputProps={{ onChange: handleLastNameChange }}
          error={!!errors.lastName}
          helperText={errors.lastName}
        />
      </div>
    </div>
  );
};

export default RSVP;
