
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");


form.addEventListener("submit", function () {

    const button = form.querySelector("button");

    button.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    button.disabled = true;

});
