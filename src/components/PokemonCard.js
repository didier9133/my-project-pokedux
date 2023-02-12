import { Rating, Card, Badge } from "flowbite-react";
import useLocalStorage from "../hooks/useLocalStorage";

const PokemonCard = ({ name, image, abilities, id }) => {
  const nameCorrect = name.replace(name[0], name[0].toLocaleUpperCase());
  const { valueStorage, persistenciaData } = useLocalStorage(id);

  const handlerClick = () => {
    persistenciaData(!valueStorage);
  };

  return (
    <div className="w-80">
      <Card>
        <div className="flex justify-between border-b-2 border-b-indigo-400">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {nameCorrect}
          </h3>

          <Rating
            size={"md"}
            onClick={() => handlerClick()}
            className="cursor-pointer"
          >
            <Rating.Star filled={valueStorage} />
          </Rating>
        </div>
        <div className="h-52">
          <img
            className="object-contain w-full h-full"
            src={image}
            alt={name}
          />
        </div>
        <h4 className="text-xl font-semibold tracking-tight text-gray-900">
          Abilities:
        </h4>
        <div f className=" flex flex-col gap-1">
          {" "}
          {abilities.map((item) => (
            <Badge
              key={`${name}-${item.ability.name}`}
              color="indigo"
              size="md"
            >
              {item.ability.name}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default PokemonCard;
