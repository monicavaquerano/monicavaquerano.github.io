
function darkMode() {
    const element = document.getElementById("foo");

    element.getAttribute("data-bs-theme") === "dark"
        ? element.setAttribute("data-bs-theme", "light")
        : element.setAttribute("data-bs-theme", "dark");

    const icon = document.getElementById("icon");

    icon.classList.toggle("bi-brightness-high-fill");
    icon.classList.toggle("bi-moon-fill")

}