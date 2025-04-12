import Hero from "../templates/pages/home/Hero";
import NewestBlogs from "../templates/pages/home/NewestBlogs";
import OurServices from "../templates/pages/home/OurServices";
import PracticePlan from "../templates/pages/home/PracticePlan";
import ProductsSlider from "../templates/pages/home/ProductsSlider";
import Sticker from "../templates/pages/home/Sticker";
import VideosSlider from "../templates/pages/home/VideosSlider";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Sticker />
            <OurServices />
            <ProductsSlider />
            <PracticePlan />
            <VideosSlider />
            <NewestBlogs />
        </>
    );
};

export default HomePage;
