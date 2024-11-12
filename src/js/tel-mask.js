document.addEventListener("DOMContentLoaded", () => {
    const telInputs = document.querySelectorAll('input[type="tel"]');

    const formatPhoneNumber = (e) => {
        const matrix = "+7 (___) ___-__-__";
        let i = 0,
            def = matrix.replace(/\D/g, ""),
            val = e.target.value.replace(/\D/g, "");

        if (e.type === 'blur' && val.length < matrix.match(/([\_\d])/g).length) {
            e.target.value = '';
            return;
        }

        if (def.length >= val.length) val = def;

        e.target.value = matrix.replace(/./g, (a) =>
            /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        );
    };

    telInputs.forEach((input) => {
        ['input', 'blur', 'focus'].forEach((ev) => {
            input.addEventListener(ev, formatPhoneNumber);
        });
    });
});
