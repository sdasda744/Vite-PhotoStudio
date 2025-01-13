import createGallery from "./renderImages";
import scroll from "./smoothScroll";

import { heroSwiper } from "./swiper";

const listener = () => {
    heroSwiper();
    createGallery();
    scroll();
    
};

export default listener;
