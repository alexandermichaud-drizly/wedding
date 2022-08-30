import * as React from 'react';
import s from '../../../styles/main.module.scss';
import { searchGuest } from '../../../api';
import {
  TextField,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import { GuestData } from '../../../types';

const mailToLink = 'mailto:rsvp@andrea-alexander.wedding?subject=RSVP';

const RSVP = (): JSX.Element => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [errors, setErrors] = React.useState({
    firstName: '',
    lastName: '',
    lookup: '',
  });
  const [matches, setMatches] = React.useState<GuestData[]>([]);
  const [selectedGuestId, setSelectedGuestId] = React.useState(null);

  const handleFirstNameChange = (e: any) => {
    setErrors({ ...errors, firstName: '' });
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e: any) => {
    setErrors({ ...errors, lastName: '' });
    setLastName(e.target.value);
  };
  const handleSelectName = (e: any) => setSelectedGuestId(e.target.value);

  const handleSearchName = () => {
    setErrors({
      ...errors,
      firstName: firstName ? '' : 'Enter a first name',
      lastName: lastName ? '' : 'Enter a last name',
      lookup: '',
    });

    if (errors.firstName || errors.lastName) return;
    const callback = (matchesReturned: GuestData[]) => {
      setSelectedGuestId(null);
      if (matchesReturned && matchesReturned.length)
        return setMatches(matchesReturned);
      setErrors({
        ...errors,
        lookup:
          "Looks like that name doesn't match any on our guest list. Make sure it's spelled right and try again. If you have multiple last names, just use your first. If you're still having trouble, please reach out and we'll get it sorted.",
      });
      setMatches([]);
    };
    searchGuest(firstName, lastName, callback);
  };

  const NameSelect = (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Name</InputLabel>
        <Select
          labelId="name-select"
          id="name-select"
          value={selectedGuestId ?? ''}
          label="Name"
          onChange={handleSelectName}
        >
          {matches.map((guest) => (
            <MenuItem
              key={`${guest.last_name}-${guest.guest_id}`}
              value={guest.guest_id}
            >
              {guest.first_name} {guest.last_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );

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
        <Button onClick={handleSearchName}>Search</Button>
      </div>
      {errors.lookup ? <div>{errors.lookup}</div> : <></>}
      {matches && matches.length ? NameSelect : <></>}
    </div>
  );
};

export default RSVP;
