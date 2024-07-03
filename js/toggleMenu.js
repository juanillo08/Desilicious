const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector("nav .header__nav");

toggleMenu.addEventListener("click", () =>{
    headerNav.classList.toggle("open")
    toggleMenu.classList.toggle("open")
})
