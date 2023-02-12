import { TextInput, Button } from "flowbite-react";
import { ReactComponent as PokeIcon } from "../assets/pokebalI_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsThunk } from "../features/dataSlice";
import { setValueSearch } from "../features/uiSlice";
import { ReactComponent as SearchIcon } from "../assets/searchIcon.svg";
import { ReactComponent as CloseIcon } from "../assets/closeIcon.svg";

const Search = () => {
  const valueSearch = useSelector((state) => state.ui.valueSearch);
  const allPokemons = useSelector((state) => state.data.pokemonsNames);
  const dispatch = useDispatch();

  const handlerChange = (e) => {
    dispatch(setValueSearch(e.target.value));
  };

  const handlerClick = async () => {
    const valueModifed = valueSearch.toLocaleLowerCase();
    const valuesSearched = allPokemons.filter((pokemon) =>
      pokemon.name.includes(valueModifed)
    );
    dispatch(getPokemonsThunk({ pokemons: valuesSearched }));
  };

  return (
    <>
      <TextInput
        id="username3"
        value={valueSearch}
        placeholder="Pokemon Name..."
        required={true}
        icon={PokeIcon}
        onChange={(e) => handlerChange(e)}
        className="w-4/5"
      />
      <Button
        disabled={!valueSearch}
        outline={false}
        gradientDuoTone="pinkToOrange"
        className="relative right-16 "
        onClick={() => handlerClick()}
      >
        <SearchIcon className="h-4 w-4" />
      </Button>
      <CloseIcon
        onClick={() => dispatch(setValueSearch(""))}
        className="cursor-pointer h-6 w-4 fill-slate-500 relative right-36"
      />
    </>
  );
};

export default Search;
