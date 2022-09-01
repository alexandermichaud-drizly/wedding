import axios from 'axios';
import { get } from 'lodash';
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
    .then((resp) => {
      console.log(resp);
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
    .then((resp) => callback(resp))
    .catch(handleError);
};
