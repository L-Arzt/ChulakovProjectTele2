import { formFeedbackFunc } from './form-feedback-func.js';

document.addEventListener('DOMContentLoaded', () => {
    const formDialog = document.querySelector(".form-modal");
    const formButtonOpen = document.querySelector(".promo__block-action .customButton");
    const formButtonSubmit = formDialog.querySelector(".manual__form-action .customButton");
    const formTelInput = formDialog.querySelector("input[type='tel']");
    const formFeedback = formDialog.querySelector(".manual__form-feedback");
    const formCheckbox = formDialog.querySelector(".manual__form-checkbox");

    formButtonOpen.addEventListener("click", () => {
        formDialog.showModal();
        document.body.classList.add("scroll-lock");
    });

    formButtonSubmit.addEventListener("click", (e) => {
        e.preventDefault();

        if (formTelInput.value.length < 18) {
            formFeedbackFunc(formDialog, "Неправильно введён номер", false);
        } else if (!formCheckbox.checked) {
            formFeedbackFunc(formDialog, "Необходимо принять условия соглашения", false);
        } else {
            formFeedbackFunc(formDialog, "Промокод выслан на ваш номер", true);

            setTimeout(() => {
                formDialog.querySelector("form").reset();
                formDialog.close();
                document.body.classList.remove("scroll-lock");
                formFeedback.classList.add("manual__form-feedback_hidden");
            }, 1000);
        }
    });
});
