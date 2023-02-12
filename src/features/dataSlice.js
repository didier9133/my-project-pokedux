import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemons, getPokemonsDetail } from "../service/getPokemons";
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [],
  pokemonsNames: "",
  pokemonsSearched: "",
  // idsFavorites: [],
};

export const getPokemonsThunk = createAsyncThunk(
  "data/getPokemonsThunk",
  async ({ pokemons, url }, { dispatch }) => {
    const pokemonsResults = pokemons || (await getPokemons(url));
    const pokemonDetails = await Promise.all(
      pokemonsResults.map((pokemon) => getPokemonsDetail(pokemon.url))
    );
    const pokemonDetailsFilter = pokemonDetails.filter(
      (pokemon) => pokemon.sprites.other.dream_world.front_default
    );

    pokemons
      ? dispatch(SET_POKEMONS_SEARCHED(pokemonDetailsFilter))
      : dispatch(SET_POKEMONS(pokemonDetails));

    // if (idsFavorites) {
    //   pokemonDetailsFilter.forEach((pokemon) => {
    //     for (let id of idsFavorites) {
    //       pokemon.id === id &&
    //         dispatch(SET_FAVOURITE({ id, eliminate: false }));
    //     }
    //   });
    // }

    dispatch(setLoading(false));
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    SET_POKEMONS: (state, acttions) => {
      state.pokemonsSearched = "";
      state.pokemons = acttions.payload;
    },
    // SET_FAVOURITE: (state, actions) => {
    //   if (!state.pokemonsSearched) {
    //     const indexOfPokemon = state.pokemons.findIndex(
    //       (pokemon) => pokemon.id === actions.payload.id
    //     );

    //     const isFavorite = state.pokemons[indexOfPokemon].favorite;
    //     state.pokemons[indexOfPokemon].favorite = !isFavorite;
    //   }

    //   if (state.pokemonsSearched) {
    //     const currentPokemonIndexsearched = state.pokemonsSearched.findIndex(
    //       (pokemon) => pokemon.id === actions.payload.id
    //     );

    //     const isFavorite =
    //       state.pokemonsSearched[currentPokemonIndexsearched].favorite;
    //     state.pokemonsSearched[currentPokemonIndexsearched].favorite =
    //       !isFavorite;
    //   }

    //   const indexOfId = state.idsFavorites.findIndex(
    //     (id) => id === actions.payload.id
    //   );
    //   if (indexOfId === -1) {
    //     state.idsFavorites = [...state.idsFavorites, actions.payload.id];
    //   }
    //   if (actions.payload.eliminate) {
    //     if (indexOfId !== -1) {
    //       state.idsFavorites.splice(indexOfId, 1);
    //     }
    //   }
    // },
    SET_POKEMONS_NAMES: (state, actions) => {
      state.pokemonsNames = actions.payload;
    },
    SET_POKEMONS_SEARCHED: (state, actions) => {
      state.pokemonsSearched = actions.payload;
    },
  },
});

export const { SET_POKEMONS, SET_POKEMONS_NAMES, SET_POKEMONS_SEARCHED } =
  dataSlice.actions;
export default dataSlice.reducer;
