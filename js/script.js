var formButton = document.querySelector(".hotel-search-button");
var form = document.querySelector(".form-section");

formButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("form-close");
})