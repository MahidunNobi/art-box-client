import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">Oops!!</h1>
      <p className="my-6">Route doesn&apos;t exists</p>
      <Link to="/">
        <button className="btn"> Home </button>{" "}
      </Link>
    </div>
  );
};

export default NotFound;
