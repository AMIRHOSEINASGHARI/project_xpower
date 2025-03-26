import Hero from "../templates/pages/Hero";
import OurServices from "../templates/pages/OurServices";
import ProductsSlider from "../templates/pages/ProductsSlider";
import Sticker from "../templates/pages/Sticker";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Sticker />
      <OurServices />
      <ProductsSlider />
    </>
  );
};

export default HomePage;
