// Smooth scroll
document.querySelectorAll(".nav-item").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);
        if(target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
