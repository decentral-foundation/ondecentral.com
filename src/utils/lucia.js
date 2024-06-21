import Lucia from 'luciasdk-t3';
import 'dotenv/config';

const lucia = new Lucia({
  baseURL: process.env.baseURL,
  api_key: process.env.API_KEY,
  //api_key: 'a256d8ef-992d41a6-2440e1a5-98f2853d-9d4fc59c-7b88f3b8-45692094-aee8489f',
});

export default lucia;
