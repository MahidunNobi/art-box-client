import { useEffect, useState } from "react";
import CraftItem from "../CraftItem/CraftItem";

const CraftItems = () => {
  const [items, setItems] = useState([]);

  const fetchItems = () => {
    fetch("https://art-box-server.vercel.app/art-box")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="container mx-auto py-6 px-3">
      <h3 className="text-4xl text-center font-bold"> Craft items </h3>
      <p className="max-w-[600px] mx-auto text-center my-6">
        Discover a treasure trove of artisanal delights in our Craft Items
        section, where every product is handpicked to ignite your imagination
        and elevate your crafting projects to new heights
      </p>
      {/* ---------Crafts container--------- */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <CraftItem key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
