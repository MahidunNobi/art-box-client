import { useLoaderData, useParams } from "react-router-dom";
import CraftItem from "../../componants/CraftItem/CraftItem";

const CategoryItems = () => {
  const { subcategory_name } = useParams();

  const items = useLoaderData();

  return (
    <div className="container mx-auto py-6 px-3">
      <h3 className="text-4xl font-bold mb-3 text-center">
        {subcategory_name.split("-").join(" ")}
      </h3>
      <p className="max-w-[600px] mx-auto text-center my-6">
        Browse through our carefully curated collection, each piece a testament
        to the boundless possibilities of human imagination and skill.
      </p>
      {items.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <CraftItem key={item._id} {...item} />
          ))}
        </div>
      ) : (
        <h1> No items availablle in this category!</h1>
      )}
    </div>
  );
};

export default CategoryItems;
