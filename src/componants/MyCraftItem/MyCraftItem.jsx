import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftItem = ({
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
  items,
  setItems,
}) => {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://art-box-server.vercel.app/art-box/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Successfull",
                text: "Craft item deleted successfully",
                icon: "success",
              });
              setItems(items.filter((item) => item._id !== _id));
            }
          });
      }
    });
  };

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
          <div>
            <Link to={`/my-art-craft-list/update/${_id}`}>
              <button className="btn btn-primary mr-3">Update</button>
            </Link>
            <button className="btn btn-error" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCraftItem;
