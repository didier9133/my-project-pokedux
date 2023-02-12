import { Button } from "flowbite-react";
import { ReactComponent as SearchIcon } from "../assets/searchIcon.svg";

const ButtonSearch = () => {
  return (
    <Button
      outline={false}
      gradientDuoTone="pinkToOrange"
      className="relative right-16 "
    >
      <SearchIcon className="h-4 w-4" />
    </Button>
  );
};

export default ButtonSearch;
