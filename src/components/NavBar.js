import logo from "../assets/logo.svg";
import { ReactComponent as Moon } from "../assets/icon-moon.svg";
import { ReactComponent as Sun } from "../assets/icon-sun.svg";
import avatar from "../assets/image-avatar.jpg";

export const NavBar = ({ toggle, darkMode }) => {
  return (
    <nav className="fixed flex justify-between items-center lg:flex-col inset-0 bg-[#373B53] h-[72px] sm:h-[80px] lg:h-auto lg:w-[100px] lg:rounded-r-[20px] z-10">
      <div className="h-full lg:h-auto lg:w-full aspect-square bg-purple rounded-r-[20px] flex justify-center items-center relative">
        <div className="absolute bottom-0 right-0 bg-lightpurple rounded-tl-[20px] w-full h-[50%] rounded-br-[20px] "></div>
        <img
          src={logo}
          className="aspect-square w-[28px] lg:w-[40px] z-10 select-none"
          alt="logo"
        ></img>
      </div>

      <div className="flex lg:flex-col justify-center items-center lg:justify-end divide-x lg:divide-x-0 lg:divide-y divide-[#494E6E] h-full lg:w-full lg:h-auto lg:py-6">
        <div className="flex justify-center  items-center h-full lg:h-auto lg:w-full px-6 lg:px-0 ">
          {darkMode ? (
            <Sun
              onClick={toggle}
              fill="#888EB0"
              className="hover:fill-[#DFE3FA] duration-200 lg:mb-6 text-textblack cursor-pointer aspect-square w-[20px]"
              alt="toggle viewmode"
            />
          ) : (
            <Moon
              onClick={toggle}
              fill="#888EB0"
              className="hover:fill-[#DFE3FA] duration-200 lg:mb-6 text-textblack cursor-pointer aspect-square w-[20px]"
              alt="toggle viewmode"
            />
          )}
        </div>
        <div className="flex justify-center items-center lg:h-auto lg:w-full h-full px-6">
          <img
            src={avatar}
            className=" lg:mt-6 aspect-square w-[32px] lg:w-[40px] rounded-full select-none"
            alt="avatar-icon"
          ></img>
        </div>
      </div>
    </nav>
  );
};
