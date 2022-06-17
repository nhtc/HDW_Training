import { User, UserLogin } from '../../types/commons';
import apiConfig from './apiConfig';
import { readFileSync, readFile, writeFile } from 'fs';
import fs from 'fs';
const loginApi = {
  login: async (name_pass: UserLogin) => {
    const result = await fetch(`${apiConfig.baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(name_pass),
    });

    return { status: result.status, data: await result.json() };
  },
  // isAuthenticated({ email, password }: User) {
  //   const userdb = JSON.parse(
  //     fs.readFileSync('./users.json', { encoding: 'utf-8' })
  //   );
  //   return (
  //     userdb.users.findIndex(
  //       (user: User) => user.email === email && user.password === password
  //     ) !== -1
  //   );
  // },
  register: async (info: User) => {
    const result = await fetch(`${apiConfig.baseUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(info),
    });
  },
};

export default loginApi;
