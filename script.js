document.addEventListener("DOMContentLoaded", () => {
    const revealCards = document.querySelectorAll(".reveal-on-scroll");

    // لو الـ IntersectionObserver مش موجود، خلي الكاردز كلها ظاهرة
    if (!("IntersectionObserver" in window)) {
        revealCards.forEach((card) => card.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            });
        },
        {
            threshold: 0.2,
            rootMargin: "0px 0px -20px 0px"
        }
    );

    revealCards.forEach((card, index) => {
        observer.observe(card);
        card.classList.add("visible");
    });
});