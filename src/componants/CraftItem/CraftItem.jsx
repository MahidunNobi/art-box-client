import { Link } from "react-router-dom";

const CraftItem = ({
  _id,
  craft_name,
  subcategory_name,
  image_url,
  price,
  customization,
  processing_time,
  stock_status,
  craft_description,
  user_email,
  user_name,
  ratting,
}) => {
  return (
    <div className="card card-compact md:w-80 lg:w-96 dark:bg-base-100 shadow-xl">
      <figure>
        <img
          src={image_url}
          alt="Shoes"
          className="h-[200px] w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="">
          <h2 className="card-title flex justify-between">
            {craft_name} <span>{ratting}/5</span>
          </h2>
          <span className="">{subcategory_name}</span>
        </div>
        <div className="flex justify-between">
          <p>Customization: {customization}</p>
          <p>Stock: {stock_status}</p>
        </div>

        <p>{craft_description}</p>
        <div className="card-actions justify-between items-center">
          <h4 className="text-xl text-pink"> {price}</h4>
          <Link to={`/art-craft-items/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CraftItem;
