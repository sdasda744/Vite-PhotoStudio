// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
export const heroSwiper = () => {
    new Swiper(".swiper", {
        // configure Swiper to use modules
        modules: [Navigation, Pagination, Autoplay],
        speed: 800,
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
