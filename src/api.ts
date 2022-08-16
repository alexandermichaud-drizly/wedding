import axios from 'axios';
const URL = 'https://ico0mvzjle.execute-api.us-east-1.amazonaws.com';

const instance = axios.create({ baseURL: URL });

export const checkName = (name: string, callback: () => void) => {
  instance.get('/guest', { params: { name } }).then((resp: any) => callback());
};
