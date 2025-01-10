import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
    origin: "top",
    distance: "25px",
    duration: 1800,
    reset: true,
});

sr.reveal(
    `.blog-item, .about-header, .map-location, .footer-logo, .footer-phoneNumber, .footer-email, .footer-license`,
    {
        origin: "top",
        interval: 200,
    }
);

sr.reveal(`.about-img, .left-contact`, {
    origin: "left",
});

sr.reveal(`.about-para, .right-contact`, {
    origin: "right",
});

export default sr

