export const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const getURLPath = ({ offset, limit }) =>
  `${BASE_URL}/?offset=${offset}&limit=${limit}`;

export default getURLPath;
