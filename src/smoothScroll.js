import {
    aboutHeader,
    aboutImg,
    aboutPara1,
    aboutPara2,
    blogItem1,
    blogItem2,
    blogItem3,
    blogItem4,
    footerEmail,
    footerLicense,
    footerLogo,
    footerPhoneNumber,
    leftContact,
    locationMap,
    rightContact,
} from "./selectors";

const scroll = () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, index * 300);
                } else {
                    setTimeout(() => {
                        entry.target.classList.remove("visible");
                    }, index * 300);
                }
            });
        },
        { threshold: 0.2, rootMargin: "100px" }
    );
    scrollElements(observer);
};

blogItem1.classList.add("fade-in");
blogItem2.classList.add("fade-in");
blogItem3.classList.add("fade-in");
blogItem4.classList.add("fade-in");
aboutHeader.classList.add("slide-down");
aboutImg.classList.add("slide-in-left");
aboutPara1.classList.add("slide-in-right");
aboutPara2.classList.add("slide-in-right");
leftContact.classList.add("slide-in-left");
rightContact.classList.add("slide-in-right");
locationMap.classList.add("fade-in");
footerLogo.classList.add("slide-down");
footerPhoneNumber.classList.add("slide-down");
footerEmail.classList.add("slide-down");
footerLicense.classList.add("slide-down");

const observeElements = [
    blogItem1,
    blogItem2,
    blogItem3,
    blogItem4,
    aboutHeader,
    aboutImg,
    aboutPara1,
    aboutPara2,
    leftContact,
    rightContact,
    locationMap,
    footerLogo,
    footerPhoneNumber,
    footerEmail,
    footerLicense,
];

const scrollElements = (observer) => {
    observeElements.forEach((el) => observer.observe(el));
};

export default scroll;
// const blogItems = (observer) => {
//     blogItem.forEach((item) => observer.observe(item));
// };

// const aboutSection = (observer) => {
//     observer.observe(aboutImg);
//     observer.observe(aboutPara);
//     setTimeout(() => {
//         observer.observe(aboutHeader);
//     }, 500);
// };

// entry.target.classList.add("duration-1000", "ease");
// entry.target.classList.remove("-translate-y-8");
// entry.target.classList.remove("opacity-0");
// entry.target.classList.add("translate-y-0");
// entry.target.classList.add("opacity-100");

// entry.target.classList.add("duration-1000", "ease");
// entry.target.classList.add("-translate-y-8");
// entry.target.classList.remove("opacity-100");
// entry.target.classList.remove("transform", "translate-y-0");
// entry.target.classList.add("opacity-0");
