import { Link } from "react-router-dom";

type Props = {
  label: string;
  route: string;
};

const MenuItem: React.FC<Props> = ({ label, route }) => {
  return (
    <Link
      className="mx-1 md:px-4 md:py-2 p-2 rounded-full md:w-24 w-auto bg-green-500 text-white text-center"
      to={`/projects/${route}`}
    >
      {label}
    </Link>
  );
};
export default MenuItem;
