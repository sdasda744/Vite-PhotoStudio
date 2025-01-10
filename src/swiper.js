// core version + navigation, pagination modules:
import ScrollReveal from "scrollreveal";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Zoom } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
export const heroSwiper = new Swiper(".swiper", {
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

// export const initNameHeader = () => {
//     const headerAnimation = {
//         origin: "top",
//         distance: "50px",
//         duration: 1800,
//         reset: true,
//     };
//     ScrollReveal().reveal(".name-header-01", headerAnimation);
//     ScrollReveal().reveal(".name-header-02", headerAnimation);
// };

// export const reset = () => {
//     heroSwiper.on("slideChange", () => {
//         const headers = document.querySelectorAll(
//             ".name-header-01",
//             ".name-header-02"
//         );
//         headers.forEach((header) => {
//             header.style.opacity = 0;
//             setTimeout(() => {
//                 ScrollReveal().reveal(header, {
//                     origin: "top",
//                     distance: "50px",
//                     duration: 1800,
//                     reset: true,
//                 });
//             }, 50);
//         });
//     });
// };
