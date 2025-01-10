import ScrollReveal from "scrollreveal";

const animateGallery = ScrollReveal({
    origin: "bottom",
    distance: "50px",
    delay: "700",
    duration: "2500",
    
});

const animateItems = () => {
    ScrollReveal().reveal(".animate-item", animateGallery);
    console.log("working..");
};
export default animateItems;
