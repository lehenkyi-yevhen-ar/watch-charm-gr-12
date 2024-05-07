document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("header nav ul li a");

    function setActiveLink() {
        const sections = document.querySelectorAll("section");
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop - sectionHeight * 0.25 && scrollPosition < sectionTop + sectionHeight - sectionHeight * 0.25) {
                const sectionId = section.getAttribute("id");
                const correspondingLink = document.querySelector(`header nav ul li a[href="#${sectionId}"]`);
                navLinks.forEach(link => link.classList.remove("active"));
                correspondingLink.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", setActiveLink);
});
