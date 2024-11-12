document.addEventListener('DOMContentLoaded', () => {
    const locationDialog = document.querySelector("#location");
    const locationButton = document.querySelector(".location");
    const locationItems = document.querySelectorAll(".location-modal__item");
    const locationCity = document.querySelector(".location__city");

    function loadCity() {
        const city = localStorage.getItem("city") || "Санкт-Петербург";
        document.title = `Tele2 - ${city}`;
        locationCity.textContent = city;
    }

    function saveCity(city) {
        localStorage.setItem("city", city);
    }

    function handleClose(elementDialog) {
        const animation = elementDialog.animate(
            [{ opacity: "0" }],
            { duration: 500, easing: "ease" }
        );

        animation.onfinish = () => {
            elementDialog.close();
            document.body.classList.remove("scroll-lock");
        };
    }

    loadCity();

    locationButton.addEventListener("click", () => {
        locationDialog.showModal();
        document.body.classList.add("scroll-lock");
    });

    locationItems.forEach((item) => {
        item.addEventListener("click", () => {
            handleClose(locationDialog);
            saveCity(item.textContent);
            loadCity();
        });
    });
});
