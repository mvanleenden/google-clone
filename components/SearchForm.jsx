import Image from "next/image";
import { useRouter } from "next/router";
import { MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import { useRef } from "react";

const SearchForm = () => {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const searchHandler = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term.trim()) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
      <Image
        height={100}
        width={300}
        alt="Google logo"
        src="https://www.google.nl/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      />
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          ref={searchInputRef}
          type="text"
          className="focus:outline-none flex-grow"
        />
        <MicrophoneIcon className="h-5 " />
      </div>
      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button onClick={searchHandler} className="btn">
          Google Search
        </button>
        <button onClick={searchHandler} className="btn">
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
