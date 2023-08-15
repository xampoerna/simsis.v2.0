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
        