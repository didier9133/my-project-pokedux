import { Footer } from "flowbite-react";
import { ReactComponent as GithubIcon } from "../assets/githubIcon.svg";
import { ReactComponent as TwitterIcon } from "../assets/twittericon.svg";
import { ReactComponent as LinkedinIcon } from "../assets/linkedinIcon.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagramIcon.svg";
const FooterComponent = () => {
  return (
    <Footer container={true} className=" bg-backgroundBlack fill-white">
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="DecsCode™" year={2022} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="#" icon={TwitterIcon} />
          <Footer.Icon href="#" icon={InstagramIcon} />
          <Footer.Icon href="#" icon={GithubIcon} />
          <Footer.Icon href="#" icon={LinkedinIcon} />
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
