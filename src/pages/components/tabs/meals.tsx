import * as React from 'react';
import s from '../../../styles/main.module.scss';
import { searchGuest, submitMealPreference } from '../../../api';
import {
  TextField,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Box,
  FormGroup,
  SelectChangeEvent,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { GuestData } from '../../../types';
import { isNil } from 'lodash';
import classNames from 'classnames';
import {
  DietaryRestrictions,
  Entrees,
  MealPreferenceFormData,
} from '../../../constants/meal_preferences';

const emptyMealState: MealPreferenceFormData = {
  meal: null,
  dietaryRestrictions: {
    [DietaryRestrictions.VEGETARIAN]: null,
    [DietaryRestrictions.VEGAN]: null,
    [DietaryRestrictions.GLUTEN_FREE]: null,
  },
};

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
  const [mealsSelected, setMealsSelected] =
    React.useState<MealPreferenceFormData>(emptyMealState);
  const [mealsSubmitted, setMealsSubmitted] =
    React.useState<MealPreferenceFormData | null>(null);

  const resetReplyError = () =>
    setErrors({
      ...errors,
      reply: '',
    });

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
    setMealsSelected(emptyMealState);
    setMealsSubmitted(null);
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

  const handleMealChange = (event: SelectChangeEvent) => {
    resetReplyError();
    setMealsSelected({
      ...mealsSelected,
      meal: parseInt(event.target.value),
    });
  };

  const handleDietaryRestrictionsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMealsSelected({
      ...mealsSelected,
      dietaryRestrictions: {
        ...mealsSelected.dietaryRestrictions,
        [event.target.name]: event.target.checked,
      },
    });
  };

  const handleAllergiesChange = (e: any) => {
    setMealsSelected({ ...mealsSelected, allergies: e.target.value });
  };

  const handleSubmitMealPreferences = () => {
    const handleError = (general = true) =>
      setErrors({
        ...errors,
        reply: general
          ? 'There was an error processing your meal preferences. Please reach out to us directly.'
          : 'Please select a meal from the dropdown.',
      });

    if (!selectedGuestId) return handleError();
    if (!mealsSelected.meal) return handleError(false);
    const callback = (resp: any) => {
      const { data } = resp;
      if (data.message && data.message.length && data.message[0])
        return setMealsSubmitted(mealsSelected);
    };
    submitMealPreference(
      selectedGuestId,
      mealsSelected.meal,
      mealsSelected.dietaryRestrictions,
      mealsSelected.allergies,
      callback,
      handleError
    );
  };

  const selectedGuestData = selectedGuestId
    ? matches.find((match) => match.guest_id === selectedGuestId)
    : null;

  const booleanToYesNo = (x: boolean) => (x ? 'Yes' : 'No');

  const recordedMealSelection = (
    entree: string | Entrees,
    vegetarian: boolean,
    vegan: boolean,
    glutenFree: boolean,
    allergies: string
  ) => (
    <div className={s.MealsAlreadySelected}>
      <div>
        {"Our records show you've already submitted your meal preferences."}
      </div>
      <div className={s.Selection}>
        Entree: <span className={s.MealPreferenceBold}>{entree}</span>
      </div>
      <div className={s.Selection}>
        Vegetarian:{' '}
        <span className={s.MealPreferenceBold}>
          {booleanToYesNo(vegetarian)}
        </span>
      </div>
      <div className={s.Selection}>
        Vegan:{' '}
        <span className={s.MealPreferenceBold}>{booleanToYesNo(vegan)}</span>
      </div>
      <div className={s.Selection}>
        Gluten-Free:{' '}
        <span className={s.MealPreferenceBold}>
          {booleanToYesNo(glutenFree)}
        </span>
      </div>
      <div className={s.Selection}>
        Allergies:{' '}
        <span className={s.MealPreferenceBold}>
          {!allergies ? 'None' : allergies}
        </span>
      </div>
      <div className={s.GetInTouch}>
        {
          'If you need to change your selection, please get in touch with us as soon as possible.'
        }
      </div>
    </div>
  );

  const MealSelection = !isNil(mealsSubmitted) ? (
    <div>
      {'Thanks for submitting your preferences! Get ready for a feast.'}
    </div>
  ) : (
    <div className={s.MealSelection}>
      <div className={s.SelectionInstructions}>
        Make your entrée selection using the dropdown below. If you are a
        vegetarian or vegan, select Other.
      </div>
      <FormControl fullWidth error={!!errors.reply}>
        <InputLabel classes={{ root: classNames(s.InputLabel, s.Root) }}>
          Meal
        </InputLabel>
        <Select
          labelId="meal-select-label"
          id="meal-select"
          value={mealsSelected.meal?.toString()}
          label="Meal"
          onChange={handleMealChange}
          classes={{ select: classNames(s.Select, s.Root) }}
          MenuProps={{ classes: { paper: classNames(s.MenuProps, s.Paper) } }}
        >
          {Object.entries(Entrees)
            .filter((entry) => isNaN(Number(entry[0])))
            .map((entry) => (
              <MenuItem key={`meal-selection-${entry[1]}`} value={entry[1]}>
                {entry[0]}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <div className={s.SelectionInstructions}>
        Check all restrictions that apply.
      </div>
      <FormGroup>
        {Object.values(DietaryRestrictions).map((restriction) => (
          <FormControlLabel
            key={restriction}
            control={
              <Checkbox
                checked={
                  mealsSelected.dietaryRestrictions[restriction] ?? undefined
                }
                onChange={handleDietaryRestrictionsChange}
                name={restriction}
              />
            }
            label={restriction}
            classes={{ root: classNames(s.Checkbox, s.Root) }}
          />
        ))}
      </FormGroup>
      <div className={s.SelectionInstructions}>
        Describe any allergies you have. If none, leave this box blank.
      </div>
      <TextField
        label="Allergies"
        InputProps={{ onChange: handleAllergiesChange }}
        classes={{
          root: classNames(s.TextField, s.Root),
        }}
      />
      <Button
        variant="text"
        onClick={handleSubmitMealPreferences}
        classes={{ root: classNames(s.SearchButton, s.Root) }}
      >
        Submit
      </Button>
      {errors.reply ? <div>{errors.reply}</div> : <></>}
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
          {!selectedGuestData?.attending
            ? 'Our records say that you are not attending. Please get in touch with us if this is an error.'
            : selectedGuestData?.meal
            ? recordedMealSelection(
                Object.values(Entrees)[selectedGuestData.meal - 1],
                !!selectedGuestData.vegetarian,
                !!selectedGuestData.vegan,
                !!selectedGuestData.gluten_free,
                selectedGuestData.allergies ?? ''
              )
            : MealSelection}
        </div>
      ) : (
        <></>
      )}
    </div>
  );

  return (
    <div className={s.RsvpContainer}>
      <h1>Wedding Dinner Selection</h1>
      <div>
        All guests will enjoy a five-course Italian feast on the evening of our
        wedding. You will be served one of two menus, depending on your choice
        of a main course. Here are the entrées to choose from:
      </div>
      <div className={s.FeastEntrees}>
        Rossini filet served with foie gras, black truffle and housemade Vin
        Santo, with a side of potato torte
      </div>
      <div className={s.FeastEntrees}>
        Chicken medallion wrapped in strips of Tuscan bacon, with a side of
        grilled vegetables
      </div>
      <div>
        {
          "The chef can also prepare menus that do not include meat. These menus vary significantly depending on individuals' other dietary needs."
        }{' '}
        <span className={s.MealPreferenceBold}>
          {
            'Please only select this option if you are a practicing vegetarian or vegan.'
          }
        </span>
      </div>
      <div className={s.Instructions}>
        We ask that you share your meal preference and dietary restrictions by{' '}
        <span className={s.MealPreferenceBold}>January 23, 2023</span>. To
        submit your selection, start by entering your first and last name below.
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

export default Meals;
