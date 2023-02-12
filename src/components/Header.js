import { Footer } from "flowbite-react";
import Search from "./Search";
import Logo from "./logo";

const Header = () => {
  return (
    <Footer
      container={true}
      className="flex justify-around items-center b bg-backgroundBlack fill-white"
    >
      <div className="w-full grid place-content-center sm:flex sm:items-center">
        <Logo />
        <div className="ml-4 mt-4 flex w-full justify-end  sm:ml-0 sm:mt-0 sm:justify-end items-center">
          <Search />
        </div>
      </div>
    </Footer>
  );
};

export default Header;
