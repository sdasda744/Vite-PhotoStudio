import listener from "./listener"
import createGallery from "./renderImages";
import { heroSwiper } from "./swiper";

class Studio {
    init() {
        listener();
        heroSwiper;
        createGallery();
    }
}

const app = new Studio();
export default app;
