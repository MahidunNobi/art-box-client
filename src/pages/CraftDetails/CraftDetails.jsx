import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
  //   const [estate, setEstate] = useState(null);
  const craft = useLoaderData();
  console.log(craft);

  //   if (!estate) {
  //     return (
  //       <h1 className="text-4xl text-red-600"> Please provide a valid id</h1>
  //     );
  //   }

  return (
    <div className="container mx-auto my-20 grid grid-cols-1 md:grid-cols-3 gap-6 px-3">
      {/* -----------Image----------- */}
      <div className="md:col-span-2">
        <img src={craft?.image_url} alt="" className="rounded-lg" />
      </div>
      <div className="space-y-3">
        <h4 className="text-4xl font-bold">{craft?.craft_name}</h4>
        <p className="text-lg flex justify-between">
          <span className="text-lg">{craft.subcategory_name}</span>
          <span className="text-lg text-pink">{craft.ratting}/5</span>
        </p>
        <p>
          {craft?.craft_description} {craft?.craft_description}
          {craft?.craft_description} {craft?.craft_description}
        </p>
        <p className="*:text-sm *:block *:text-pink">
          <span>
            User Name:
            <span className="text-base text-gray-600 dark:text-white">
              {craft.user_name}
            </span>
          </span>
          <span>
            User Email:
            <span className="text-base text-gray-600 dark:text-white">
              {craft.user_email}
            </span>
          </span>
          <span>
            Customization:
            <span className="text-base text-gray-600 dark:text-white">
              {craft.customization}
            </span>
          </span>
          <span>
            Processing Time:
            <span className="text-base text-gray-600 dark:text-white">
              {craft.processing_time}
            </span>
          </span>
          <span>
            Availability:
            <span className="text-base text-gray-600 dark:text-white">
              {craft.stock_status}
            </span>
          </span>
        </p>

        <h3 className="text-3xl text-pink font-semibold">{craft.price}</h3>
      </div>
    </div>
  );
};

export default CraftDetails;
