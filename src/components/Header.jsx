import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSVG from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const handleCkick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed flex top-0 left-0 w-full z-50 border-b bg-n-8/90 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "ng-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 mb-2">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} alt="Brainwave" width={190} height={40} />
        </a>
      </div>
      <nav
        className={`${
          openNavigation ? "flex" : "hidden"
        }  fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
      >
        <div className="relative active:text-n-1 z-2 flex flex-col items-center justify-center m-auto lg:flex-row text-color-2">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={handleCkick}
              className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                item.onlyMobile ? "lg:hidden" : ""
              } px-6 py-6 lg:text-xs lg:font-semibold ${
                item.url === pathname.hash
                  ? "z-2 lg:text-n-1"
                  : "lg:text-n-1/50"
              } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              {item.title}
            </a>
          ))}
        </div>
        <HamburgerMenu />
      </nav>
      <a
        href="#signup"
        className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block px-6 py-6"
      >
        Creat new acount
      </a>
      <Button className="hidden lg:flex items-center mt-2">Sign in</Button>
      <Button
        className="ml-auto lg:hidden"
        px="px-3"
        onClick={toggleNavigation}
      >
        <MenuSVG openNavigation={openNavigation} />
      </Button>
    </div>
  );
};

export default Header;
