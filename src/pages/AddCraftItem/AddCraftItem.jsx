import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const AddCraftItem = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const craft_name = form.craft_name.value;
    const subcategory_name = form.subcategory_name.value;
    const image_url = form.image_url.value;
    const price = form.price.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stock_status = form.stock_status.value;
    const craft_description = form.craft_description.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;
    const ratting = form.ratting.value;

    const craft = {
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
    };
    fetch("https://art-box-server.vercel.app/art-box", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(craft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            title: "Success",
            text: "Craft added successfully!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="hero min-h-screen container mx-auto">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create a new item</h1>
        </div>
        <div className="card shrink-0 w-full md:max-w-[768px] mx-auto shadow-2xl ">
          <form
            onSubmit={handleSubmit}
            className="rounded-lg py-6 *:w-full grid gap-6 grid-cols-1 md:grid-cols-2 *:text-white"
          >
            {/* -----------Name-------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Craft Name"
                name="craft_name"
                className="input input-bordered"
                required
              />
            </div>
            {/* ----------Subcategory Name----------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subcategory Name</span>
              </label>
              <input
                type="text"
                placeholder="Subcategory"
                name="subcategory_name"
                className="input input-bordered"
                required
              />
            </div>
            {/* ----------Image URL------------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image Url"
                name="image_url"
                className="input input-bordered"
                required
              />
            </div>
            {/* ------Price ---------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="BDT 10,000/-"
                name="price"
                className="input input-bordered"
                required
              />
            </div>
            {/* ------Customization ---------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <input
                type="text"
                placeholder="Yes or No"
                name="customization"
                className="input input-bordered"
                required
              />
            </div>
            {/* ------Stock status ---------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Stock status</span>
              </label>
              <input
                type="text"
                placeholder="In stock or make to order"
                className="input input-bordered"
                name="stock_status"
                required
              />
            </div>
            {/* -----------Craft Description */}
            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text">Craft Description</span>
              </label>
              <textarea
                className="textarea h-24"
                name="craft_description"
                placeholder="Craft description"
              ></textarea>
            </div>
            {/* ----------User Email ------------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="email"
                placeholder="user@mail.com"
                name="user_email"
                value={user.email}
                disabled
                className="input input-bordered"
                required
              />
            </div>
            {/* ----------User Name ------------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="User"
                name="user_name"
                value={user.displayName}
                disabled
                className="input input-bordered"
                required
              />
            </div>
            {/* ----------Processing time------------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <input
                type="text"
                placeholder="Processing Time"
                name="processing_time"
                className="input input-bordered"
                required
              />
            </div>
            {/* ----------Ratting ------------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="4.5/5"
                name="ratting"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6 md:col-span-2">
              <input
                className="btn bg-pink text-white border-none w-[200px] mx-auto"
                type="submit"
                value="ADD"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCraftItem;
