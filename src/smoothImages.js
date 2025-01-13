const smoothGallery = (gallery) => {
    const observer = new IntersectionObserver((entries) => {
        const toAdd = [];
        const toRemove = [];

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                
                toAdd.push(entry.target);
            } else {
                
                toRemove.push(entry.target);
            }
        });
        toAdd.forEach((el, index) => setTimeout(() => {
            el.classList.add("visible");
        }, index * 200));
        toRemove.forEach((el, index) => setTimeout(() => {
            el.classList.remove("visible");
        }, index * 200));
    }, {
        threshold: 0.1,
        rootMargin: "0px 100px 0px 0px",
    });

    const animatedGallery = document.querySelectorAll(`${gallery}`);
    animatedGallery.forEach((item) => observer.observe(item));
};

export default smoothGallery;
