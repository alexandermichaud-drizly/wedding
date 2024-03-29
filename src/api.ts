import axios from 'axios';
import { get } from 'lodash';
import {
  DietaryRestrictions,
  DietaryRestrictionsType,
  Entrees,
} from './constants/meal_preferences';
import { GuestData } from './types';

const client = axios.create({
  baseURL: 'https://ico0mvzjle.execute-api.us-east-1.amazonaws.com/',
  timeout: 5000,
});

export const searchGuest = (
  firstName: string,
  lastName: string,
  callback: (matches: GuestData[]) => void,
  handleError: () => void
) => {
  client
    .get(`/guest?first_name=${firstName}&last_name=${lastName}`)
    .then((resp: unknown) => {
      const matchingNames: GuestData[] = get(resp, 'data.matches');
      callback(matchingNames);
    })
    .catch(handleError);
};

export const submitReply = (
  guestId: number,
  attending: boolean,
  callback: (resp: unknown) => void,
  handleError: () => void
) => {
  client
    .post('/reply', { guest_id: guestId, attending })
    .then((resp: unknown) => callback(resp))
    .catch(handleError);
};

export const submitMealPreference = (
  guestId: number,
  meal: Entrees,
  dietaryRestrictions: DietaryRestrictionsType,
  allergies: string | undefined,
  callback: (resp: unknown) => void,
  handleError: () => void
) => {
  client
    .post('/meal', {
      guest_id: guestId,
      meal,
      vegetarian: !!dietaryRestrictions[DietaryRestrictions.VEGETARIAN],
      vegan: !!dietaryRestrictions[DietaryRestrictions.VEGAN],
      gluten_free: !!dietaryRestrictions[DietaryRestrictions.GLUTEN_FREE],
      allergies,
    })
    .then((resp: unknown) => callback(resp))
    .catch(handleError);
};
