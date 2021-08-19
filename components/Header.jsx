import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

import Avatar from "../components/Avatar";
import HeaderOptions from "../components/HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef();

  const clearInputHandler = () => {
    searchInputRef.current.value = "";
  };

  const searchHandler = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term.trim()) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white px-2">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          height={40}
          width={120}
          alt="Google Logo"
          className="cursor-pointer"
          src="https://www.google.nl/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
            defaultValue={router.query.term}
          />
          <XIcon
            onClick={clearInputHandler}
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={searchHandler}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url={
            "https://media-exp1.licdn.com/dms/image/C4D03AQFtwkujs6QtyQ/profile-displayphoto-shrink_100_100/0/1552844207285?e=1634774400&v=beta&t=2BFefY90LV0zxl4fUsLKNtQJFeMnE9Vbd3PrPi93a58"
          }
        />
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
