import { Link } from "react-router-dom";

const Category = ({ image, subcategory_name }) => {
  return (
    <Link to={`/category/${subcategory_name.split(" ").join("-")}`}>
      <div className="card card-side dark:bg-base-100 dark:text-white shadow-lg border border-gray-300 md:shadow-2xl w-full md:w-64 my-3 md:my-0 h-20">
        <figure className="w-20">
          <img
            src={image}
            alt={subcategory_name}
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body py-4 px-2 flex justify-center items-center">
          <h2 className="card-title">{subcategory_name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Category;
