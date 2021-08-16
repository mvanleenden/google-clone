import Head from "next/head";
import { ViewGridIcon } from "@heroicons/react/solid";

import Avatar from "../components/Avatar";
import SearchForm from "../components/SearchForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Head>
        <title>Google</title>
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://media-exp1.licdn.com/dms/image/C4D03AQFtwkujs6QtyQ/profile-displayphoto-shrink_100_100/0/1552844207285?e=1634774400&v=beta&t=2BFefY90LV0zxl4fUsLKNtQJFeMnE9Vbd3PrPi93a58" />
        </div>
      </header>
      <SearchForm />
      <Footer />
    </div>
  );
}
