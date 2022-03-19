const navbarAction = document.getElementById("navbar-action");
const navbarHandle = document.querySelectorAll(".navbar__handle");
const navbarList = document.getElementById("navbar-list");
const nav = document.querySelector(".nav");

// Define selector for selecting
// anchor links with the hash
let anchorSelector = 'a[href^="#"]';

// Collect all such anchor links
let anchorList = document.querySelectorAll(anchorSelector);

// Iterate through each of the links
if (anchorList.length >= 1) {
    anchorList.forEach((link) => {
        link.onclick = function (e) {
            // Prevent scrolling if the
            // hash value is blank
            e.preventDefault();

            // Get the destination to scroll to
            // using the hash property
            let destination = document.querySelector(this.hash);

            navbarList.classList.remove("navbar__list--active");
            navbarHandle.forEach((handle) => {
                handle.classList.remove("close-open__action--active");
            });


            // Scroll to the destination using
            // scrollIntoView method
            destination.scrollIntoView({
                behavior: "smooth",
                alignToTop: true,
            });
        };
    });
}