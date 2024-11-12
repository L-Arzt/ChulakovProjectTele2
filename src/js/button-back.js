
document.addEventListener('DOMContentLoaded', () => {
    const buttonBack = document.querySelector(".buttonBack");
    buttonBack.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
            buttonBack.classList.remove("buttonBack_hidden");
        } else {
            buttonBack.classList.add("buttonBack_hidden");
        }
    });
})