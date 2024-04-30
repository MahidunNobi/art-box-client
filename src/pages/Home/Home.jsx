import About from "../../componants/About/About";
import ArtCraftCategories from "../../componants/Art&CraftCategories/Art&CraftCategories";
import CraftItems from "../../componants/CraftItems/CraftItems";
import Slider from "../../componants/Slider/Slider";
import Subscription from "../../componants/Subscription/Subscription";

const Home = () => {
  return (
    <div>
      <Slider />
      <About />
      <CraftItems />
      <ArtCraftCategories />
      <Subscription />
    </div>
  );
};

export default Home;
