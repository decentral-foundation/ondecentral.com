import Lucia from '../../node_modules/luciasdk-t1/lucia-sdk.js';

const lucia = new Lucia({
  clientId: 'ondecentral',
  //baseURL: 'http://localhost:3000',
  baseURL: 'https://api.clickinsights.xyz',
  api_key: '823ca7d3-cd584f77-c7377e4b-64266154-a5711589-e95ce612-315d798d-49773272',
  //api_key: 'a256d8ef-992d41a6-2440e1a5-98f2853d-9d4fc59c-7b88f3b8-45692094-aee8489f',
});

export default lucia;
