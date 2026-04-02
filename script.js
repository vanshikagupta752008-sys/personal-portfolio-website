
const sidebar = document.querySelector(".sidebar");
const ham = document.querySelector(".ham");
const cross = document.querySelector(".cross");

cross.style.display = "none";

// Open sidebar
ham.addEventListener("click", () => {
    sidebar.classList.remove("sidebarGo");
    ham.style.display = "none";
    cross.style.display = "inline";
});

// Close sidebar
cross.addEventListener("click", () => {
    sidebar.classList.add("sidebarGo");
    ham.style.display = "inline";
    cross.style.display = "none";
});