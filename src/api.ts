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
  callback: (matches: GuestData[]) => void
) => {
  client
    .get(`/guest?first_name=${firstName}&last_name=${lastName}`)
    .then((response) => {
      console.log(response);
      const matchingNames: GuestData[] = get(response, 'data.matches');
      callback(matchingNames);
    })
    .catch((error) => console.log(error));
};

export const submitReply = (guestId: number, attending: boolean) => {
  client
    .post('/reply', { guest_id: guestId, attending })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};
