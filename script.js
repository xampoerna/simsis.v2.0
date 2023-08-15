// Header time scroll
const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
    let time = new Date();
    displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
    setTimeout(showTime, 1000);
}

showTime();

// Date
function updateDate() {
    let today = new Date();

    // return number
    let dayName = today.getDay(),
        dayNum = today.getDate(),
        month = today.getMonth(),
        year = today.getFullYear();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // value -> ID of the html element
    const IDCollection = ["day", "daynum", "month", "year"];
    // return value array with number as a index
    const val = [dayWeek[dayName], dayNum, months[month], year];
    for (let i = 0; i < IDCollection.length; i++) {
        document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
    }
}

updateDate();
setInterval(updateDate, 1000);

//Profile Menu
const userPic = document.getElementById("userPic");
const menuContainer = document.getElementById("menuContainer");

// Tampilkan menu saat gambar diklik
userPic.addEventListener("click", function (event) {
    event.stopPropagation();
    menuContainer.classList.toggle("hidden");
});

// Sembunyikan menu saat klik dilakukan di luar elemen gambar dan menu
document.addEventListener("click", function (event) {
    const targetElement = event.target;
    if (!menuContainer.contains(targetElement) && targetElement !== userPic) {
        menuContainer.classList.add("hidden");
    }
});

// Sidebar Function
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#btn");
const searchBtn = document.querySelector(".bx-search");
const itemMenus1 = document.querySelector("#button1");
const itemMenus2 = document.querySelector("#button2");
const berandaOpen = document.querySelector("#beranda");
const profilOpen = document.getElementById("profil");
const prestasiOpen = document.getElementById("prestasi");
const dosenOpen = document.querySelector("#dosen");
const journalOpen = document.querySelector("#journal");
const links = document.querySelectorAll(".links_name");
const dropdowns = document.querySelectorAll("[data-collapse-toggle]");
let sidebarOpen = false;

function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}
            
function toggleSidebar() {
    sidebar.classList.toggle("open");
    menuBtnChange();
}

function closeSidebar() {
    sidebarOpen = false;
    sidebar.classList.remove("open");
    menuBtnChange();
}

// Add event listener to the close button
closeBtn.addEventListener("click", toggleSidebar);

// Add event listeners to links and dropdowns
links.forEach((link) => {
    link.addEventListener("click", closeSidebar);
});

itemMenus1.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebarOpen = true; // Set sidebarOpen ke true saat mengklik itemMenus1
    sidebar.classList.add("open");
    menuBtnChange();
});

itemMenus2.addEventListener("click", (event) => {
    event.stopPropagation();
    sidebarOpen = true; // Set sidebarOpen ke true saat mengklik itemMenus1
    sidebar.classList.add("open");
    menuBtnChange();
});

dropdowns.forEach((dropdown) => {
    const targetId = dropdown.getAttribute("data-collapse-toggle");
    const targetDropdown = document.getElementById(targetId);

    dropdown.addEventListener("click", () => {
        targetDropdown.classList.toggle("hidden");
    });
});

// Sidebar open functions
function openSidebar() {
    sidebarOpen = true;
    sidebar.classList.add("open");
    menuBtnChange();
}

berandaOpen.addEventListener("mouseenter", openSidebar);
prestasiOpen.addEventListener("mouseenter", openSidebar);
dosenOpen.addEventListener("mouseenter", openSidebar);
journalOpen.addEventListener("mouseenter", openSidebar);

// Close sidebar when clicking outside the sidebar
document.addEventListener("mousemove", (event) => {
    const isMouseOutsideSidebar =
        !sidebar.contains(event.target) &&
        !berandaOpen.contains(event.target) &&
        !profilOpen.contains(event.target) &&
        !prestasiOpen.contains(event.target) &&
        !dosenOpen.contains(event.target) &&
        !journalOpen.contains(event.target);

    if (isMouseOutsideSidebar && !sidebarOpen) {
        closeSidebar();
    }
});

// Handle search button click
searchBtn.addEventListener("click", () => {
    sidebarOpen = !sidebarOpen;
    toggleSidebar();
});
        
//Carousel Image
const carousel = document.querySelector("#default-carousel");
const items = carousel.querySelectorAll("[data-carousel-item]");
const prevButton = carousel.querySelector("[data-carousel-prev]");
const nextButton = carousel.querySelector("[data-carousel-next]");

let activeIndex = 0;
let intervalId = null;

const showSlide = (index) => {
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.remove("hidden");
            item.classList.add("duration-700");
        } else {
            item.classList.add("hidden");
            item.classList.remove("duration-700");
        }
    });
};

const showNextSlide = () => {
    activeIndex = (activeIndex + 1) % items.length;
    showSlide(activeIndex);
};

const startCarousel = () => {
    intervalId = setInterval(showNextSlide, 3000);
};

const stopCarousel = () => {
    clearInterval(intervalId);
};

prevButton.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    showSlide(activeIndex);
    stopCarousel();
});

nextButton.addEventListener("click", () => {
    showNextSlide();
    stopCarousel();
});

carousel.addEventListener("mouseover", stopCarousel);
carousel.addEventListener("mouseout", startCarousel);

showSlide(activeIndex);
startCarousel();

