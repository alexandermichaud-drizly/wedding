import axios from 'axios';

const client = axios.create({
  baseURL: 'https://ico0mvzjle.execute-api.us-east-1.amazonaws.com/',
  timeout: 5000,
});

export const searchGuest = (firstName: string, lastName: string) => {
  client
    .get('/test-connection')
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};
