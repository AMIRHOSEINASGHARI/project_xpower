import Hero from "../templates/pages/home/Hero";
import OurServices from "../templates/pages/home/OurServices";
import PracticePlan from "../templates/pages/home/PracticePlan";
import ProductsSlider from "../templates/pages/home/ProductsSlider";
import Sticker from "../templates/pages/home/Sticker";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Sticker />
      <OurServices />
      <ProductsSlider />
      <PracticePlan />
    </>
  );
};

export default HomePage;
