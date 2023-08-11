document.addEventListener("DOMContentLoaded", function () {

    const toggleInterestsButton = document.getElementById("toggleInterests");

    const interestsSection = document.getElementById("interets");

    toggleInterestsButton.addEventListener("click", function () {
        interestsSection.classList.toggle("hidden"); 
    });

    const scrollToTopButton = document.getElementById("scrollToTop");

    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    });

    scrollToTopButton.style.display = "none";

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

});
