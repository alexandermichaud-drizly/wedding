import * as React from 'react';
import s from '../../../styles/main.module.scss';
import { searchGuest, submitReply } from '../../../api';
import {
  TextField,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Box,
} from '@mui/material';
import { GuestData } from '../../../types';
import { isNil } from 'lodash';
import classNames from 'classnames';

enum Responses {
  NOT_GOING,
  GOING,
}

const RSVP = (): JSX.Element => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [errors, setErrors] = React.useState({
    firstName: '',
    lastName: '',
    lookup: '',
    reply: '',
  });
  const [matches, setMatches] = React.useState<GuestData[]>([]);
  const [selectedGuestId, setSelectedGuestId] = React.useState(null);
  const [responseSubmitted, setResponseSubmitted] =
    React.useState<Responses | null>(null);

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
    const handleError = () =>
      setErrors({
        ...errors,
        lookup:
          'There was an error looking up your RSVP. Please reach out to us so that we can look into it.',
      });
    setErrors({
      ...errors,
      firstName: firstName ? '' : 'Enter a first name',
      lastName: lastName ? '' : 'Enter a last name',
      lookup: '',
      reply: '',
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
    searchGuest(firstName, lastName, callback, handleError);
  };

  const handleSubmitReply = (reply: Responses) => {
    setErrors({ ...errors, reply: '' });

    const handleError = () =>
      setErrors({
        ...errors,
        reply:
          'There was an error processing your RSVP. Please reach out to us directly.',
      });

    if (!selectedGuestId) return handleError();
    const callback = (resp: any) => {
      console.log(resp);
      const { data } = resp;
      if (data.message && data.message.length && data.message[0])
        return setResponseSubmitted(reply);
    };
    submitReply(selectedGuestId, !!reply, callback, handleError);
  };

  const selectedGuestData = selectedGuestId
    ? matches.find((match) => (match.guest_id = selectedGuestId))
    : null;

  const ReplyButtons = !isNil(responseSubmitted) ? (
    <div>
      {responseSubmitted === Responses.GOING
        ? "We're thrilled you can attend! See you in Tuscany!"
        : "Thank you for RSVPing. We're sad to hear you can't attend the wedding, but we hope to catch up with you sometime soon!"}
    </div>
  ) : (
    <div className={s.RsvpButtons}>
      Click to submit your RSVP!
      <Button
        variant="contained"
        onClick={() => handleSubmitReply(Responses.GOING)}
      >
        I&apos;m Going!
      </Button>
      <Button
        variant="outlined"
        onClick={() => handleSubmitReply(Responses.NOT_GOING)}
      >
        Unfortunately, I can&apos;t make it.
      </Button>
    </div>
  );

  const NameSelect = (
    <div>
      <div>
        {selectedGuestId
          ? ''
          : "Select your name from the matching results. If you don't see your name, check the spelling and try again. If you have two last names, use just the first."}
      </div>
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
      {selectedGuestData ? (
        <div>
          {selectedGuestData.attending || selectedGuestData.attending === false
            ? `It looks like you've already responded that you are ${
                selectedGuestData.attending ? '' : 'not'
              } attending. If you'd like to change your RSVP, please get in touch with us directly.`
            : ReplyButtons}
        </div>
      ) : (
        <></>
      )}
    </div>
  );

  return (
    <div className={s.RsvpContainer}>
      <h1>RSVP</h1>
      <div className={s.Instructions}>
        We ask that you RSVP by November 30, 2022. To submit your reply, start
        by entering your first and last name below. If your Save-the-Date was
        addressed to multiple invitees, search for each name individually.
      </div>
      <Box className={s.RSVP}>
        <TextField
          label="First Name"
          InputProps={{ onChange: handleFirstNameChange }}
          error={!!errors.firstName}
          helperText={errors.firstName}
          classes={{
            root: classNames(s.TextField, s.Root),
          }}
        />
        <TextField
          label="Last Name"
          InputProps={{ onChange: handleLastNameChange }}
          error={!!errors.lastName}
          helperText={errors.lastName}
          classes={{
            root: classNames(s.TextField, s.Root),
          }}
        />
        <Button
          variant="text"
          onClick={handleSearchName}
          classes={{ root: classNames(s.SearchButton, s.Root) }}
        >
          Search
        </Button>
        {errors.lookup ? <div>{errors.lookup}</div> : <></>}
        {matches && matches.length ? NameSelect : <></>}
      </Box>
    </div>
  );
};

export default RSVP;
