const getPokemons = (url) => {
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => data.results)
    .catch((err) => console.log(err));
};

const getPokemonsDetail = (singleUrl) => {
  return fetch(singleUrl)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
};

const getPokemonsAll = (urlAll) => {
  return fetch(urlAll)
    .then((resp) => resp.json())
    .then((data) => data.results);
};

export { getPokemons, getPokemonsDetail, getPokemonsAll };
