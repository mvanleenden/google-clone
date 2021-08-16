import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import PaginationButton from "./PaginationButton";

const PaginationButtons = () => {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;

  return (
    <div className="flex max-w-lg justify-between text-blue-700 mb-10">
      {startIndex >= 10 && (
        <PaginationButton
          Icon={ChevronLeftIcon}
          text={"Previous"}
          link={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        />
      )}

      <PaginationButton
        Icon={ChevronRightIcon}
        text={"Next"}
        link={`/search?term=${router.query.term}&start=${startIndex + 10}`}
      />
    </div>
  );
};

export default PaginationButtons;
