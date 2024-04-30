import { useContext, useEffect, useState } from "react";
import MyCraftItem from "../../componants/MyCraftItem/MyCraftItem";
import { AuthContext } from "../../context/AuthContext";

const MyArtCraftList = () => {
  const { user } = useContext(AuthContext);
  const [Customization, setCustomization] = useState("");
  const [items, setItems] = useState([]);

  const fetchItems = () => {
    const fetchLink =
      Customization === ""
        ? "https://art-box-server.vercel.app/art-box-by-email"
        : `https://art-box-server.vercel.app/art-box-by-customization/${Customization}`;

    fetch(fetchLink, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => setItems(data));
  };

  useEffect(() => {
    fetchItems();
  }, [Customization]);

  const handleCustomizationChange = (e) => {
    const { value } = e.target;
    setCustomization(value);
  };
  return (
    <div className="container mx-auto py-6 px-3">
      <h3 className="text-4xl font-bold mb-3 text-center">My Art and Crafts</h3>
      <p className="max-w-[600px] mx-auto text-center my-6">
        Your personalized space to showcase your creative masterpieces, share
        your artistic journey.
      </p>
      <div className="flex justify-end items-center mb-6 gap-3">
        <h6>Filter by Customization</h6>
        <select
          onChange={handleCustomizationChange}
          className="select select-bordered w-full max-w-xs bg-white dark:bg-base-200"
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MyCraftItem
            key={item._id}
            {...item}
            items={items}
            setItems={setItems}
          />
        ))}
      </div>
    </div>
  );
};

export default MyArtCraftList;
