import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemones }) => {
  return (
    <>
      {pokemones.length ? (
        <div className="flex flex-wrap mt-10 justify-center lg:justify-between gap-5 ">
          {pokemones.map((pokemon) => (
            <PokemonCard
              name={pokemon.name}
              key={pokemon.id}
              image={pokemon.sprites.other.dream_world.front_default}
              abilities={pokemon.abilities}
              id={pokemon.id}
              isFavourite={pokemon.favorite}
            />
          ))}
        </div>
      ) : (
        <div className="flex gap-11 flex-col text-center items-center">
          <div>
            <img
              className="object-contain"
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg"
            />
          </div>
          <div>
            <p>
              <span>404.</span>That is an error.
            </p>

            <p>
              <span>the requested search was no found on this server.</span>That
              is all we know
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonList;
