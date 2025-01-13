import galleryItems from "./galleryItems";
import smoothGallery from "./smoothImages";
import { GalleryContainer } from "./selectors";

const itemsPerPages = 12;
let currentFilter = "all";

const createGallery = () => {
    GalleryContainer.innerHTML = `
        <div class="container mx-auto">
            <div class="filter-btns flex justify-center items-center gap-10 mb-10">
                <button class="filter-button border border-red-300 px-2 w-[100px] active text-lg text-slate-200 hover:text-slate-400 duration-200" data-filter="all">All</button>
                <button class="filter-button border border-red-300 px-2 w-[100px] text-lg text-slate-200 hover:text-slate-400 duration-200" data-filter="human">Human</button>
                <button class="filter-button border border-red-300 px-2 w-[100px] text-lg text-slate-200 hover:text-slate-400 duration-200" data-filter="nature">Nature</button>
                <button class="filter-button border border-red-300 px-2 w-[100px] text-lg text-slate-200 hover:text-slate-400 duration-200" data-filter="pet">Pet</button>
                <button class="filter-button border border-red-300 px-2 w-[100px] text-lg text-slate-200 hover:text-slate-400 duration-200" data-filter="place">Place</button>
            </div>
            <div id="gallery" class="grid grid-cols-1 gap-5 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 "></div>
            <div class="text-center mt-16">
                <button id="viewMoreButton" class="border border-green-500 hover:bg-green-600 duration-200 text-white px-6 py-2 rounded">View More</button>
            </div>
        </div>
    `;

    renderGallery();
    filterButtonHandler();
    viewMoreHandler();
};

const renderGallery = () => {
    const gallery = document.querySelector("#gallery");
    const filterItems =
        currentFilter === "all"
            ? galleryItems
            : galleryItems.filter((item) => item.category === currentFilter);

    gallery.innerHTML = filterItems.map((item, index) => 
        `<div class="gallery-item slide-down w-full  ${index >= itemsPerPages ? "hidden-item" : ""}  " data-filter="${item.category}">
            <img class="w-full h-auto max-w-[320px] aspect-square object-cover" src="${item.image}" alt="${item.alt}" loading="lazy" />
        </div>`).join("");
    smoothGallery(".slide-down");
    updateViewMoreButton();
};

// Setting up filter button
const filterButtonHandler = () => {
    const filterButtons = document.querySelectorAll(".filter-button");
    filterButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
    
            filterButtons.forEach((removeActive) => removeActive.classList.remove("active"));
            e.target.classList.add("active");
            currentFilter = e.target.dataset.filter;
            renderGallery();
        })
    })
};

// Setting up view more button
const viewMoreHandler = () => {
    const viewMoreButton = document.querySelector("#viewMoreButton");
    viewMoreButton.addEventListener("click", () => {

        toggleViewHandler();
    });
}

// Setting up toggle view more
const toggleViewHandler = () => {
    const viewMoreButton = document.querySelector("#viewMoreButton");
    const galleryItems = document.querySelectorAll(".gallery-item");

    const isShowing = viewMoreButton.innerText.includes("Less");
    galleryItems.forEach((items, index) => {
        if (index >= itemsPerPages) {
            items.classList.toggle("hidden-item");
        }
    })

    viewMoreButton.innerText = isShowing ? "View More" : "View Less";
}

const updateViewMoreButton = () => {
    const viewMoreButton = document.querySelector("#viewMoreButton");
  
    const filteredItems = currentFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === currentFilter);
  
    viewMoreButton.style.display = filteredItems.length > itemsPerPages ? 'inline-block' : 'none';
    viewMoreButton.innerText = 'View More';
  };


export default createGallery;
