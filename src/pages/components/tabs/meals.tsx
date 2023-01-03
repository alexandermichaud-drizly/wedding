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

const Meals = (): JSX.Element => {
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
    setSelectedGuestId(null);
    setResponseSubmitted(null);
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

    if (!firstName || !lastName) return;
    const callback = (matchesReturned: GuestData[]) => {
      if (matchesReturned && matchesReturned.length)
        return setMatches(matchesReturned);
      setErrors({
        ...errors,
        lookup:
          "Looks like that name doesn't match anyone on our guest list. Make sure it's spelled right and try again. If you have multiple last names, just use your first. If you're still having trouble, please reach out and we'll get it sorted out.",
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
      const { data } = resp;
      if (data.message && data.message.length && data.message[0])
        return setResponseSubmitted(reply);
    };
    submitReply(selectedGuestId, !!reply, callback, handleError);
  };

  const selectedGuestData = selectedGuestId
    ? matches.find((match) => match.guest_id === selectedGuestId)
    : null;

  const ReplyButtons = !isNil(responseSubmitted) ? (
    <div>
      {responseSubmitted === Responses.GOING
        ? "We're thrilled you can attend! See you in Tuscany!"
        : "Thank you for RSVPing. We're sad to hear you can't attend the wedding, but we hope to catch up with you sometime soon!"}
    </div>
  ) : (
    <div className={s.RsvpButtons}>
      <div>Click to submit your RSVP!</div>
      <Button
        variant="contained"
        onClick={() => handleSubmitReply(Responses.GOING)}
      >
        Of course I&apos;m Going!
      </Button>
      <Button
        variant="outlined"
        onClick={() => handleSubmitReply(Responses.NOT_GOING)}
      >
        Unfortunately, I can&apos;t make it
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
        <InputLabel
          id="select-label"
          classes={{ root: classNames(s.InputLabel, s.Root) }}
        >
          Name
        </InputLabel>
        <Select
          labelId="name-select"
          id="name-select"
          value={selectedGuestId ?? ''}
          label="Name"
          onChange={handleSelectName}
          classes={{ select: classNames(s.Select, s.Root) }}
          MenuProps={{ classes: { paper: classNames(s.MenuProps, s.Paper) } }}
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
      <h1>Wedding Dinner Selection</h1>
      <div className={s.Instructions}>
        We ask that you share your meal preference by January 23, 2023. To
        submit your reply, start by entering your first and last name below.
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
      *
    </div>
  );
};

export default Meals;
