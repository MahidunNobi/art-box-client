import { useEffect, useState } from "react";
import Category from "../Category/Category";

const ArtCraftCategories = () => {
  const [categories, setCategories] = useState([]);

  const fetchSubcategories = () => {
    fetch("https://art-box-server.vercel.app/subcategories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  useEffect(() => {
    fetchSubcategories();
  }, []);
  return (
    <div className="container mx-auto py-6 px-3">
      <h3 className="text-4xl text-center font-bold mb-6">
        Art & Craft Categories
      </h3>
      {/* ----------Art & Craft categories container------ */}
      <div className="md:flex md:gap-6 md:flex-wrap md:justify-center">
        {categories.map((cate) => (
          <Category key={cate._id} {...cate} />
        ))}
      </div>
    </div>
  );
};

export default ArtCraftCategories;
