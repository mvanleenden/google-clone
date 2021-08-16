import Link from "next/link";

const PaginationButton = ({ Icon, text, link }) => {
  return (
    <Link href={link} passHref>
      <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
        {Icon && <Icon className="h-5" />}
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default PaginationButton;
