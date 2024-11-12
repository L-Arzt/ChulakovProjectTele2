import { formFeedbackFunc } from './form-feedback-func.js'

document.addEventListener('DOMContentLoaded', () => {
    const formmanual = document.querySelector(".manual__form");
    const formmanualTel = formmanual.querySelector("input[type='tel']");
    const formmanualCheckbox = formmanual.querySelector("input[type='checkbox']");
    const formmanualubmit = formmanual.querySelector(".manual__form-action .customButton");

    formmanualubmit.addEventListener("click", (e) => {
        e.preventDefault();
        if (formmanualTel.value.length < 18) {
            formFeedbackFunc(formmanual, "Неправильно введён номер", false);
        } else if (!formmanualCheckbox.checked) {
            formFeedbackFunc(formmanual, "Необходимо принять условия соглашения", false);
        } else {
            formFeedbackFunc(formmanual, "Промокод выслан на ваш номер", true);
            formmanual.reset();
        }
    });
})