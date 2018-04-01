var formButton = document.querySelector(".hotel-search-button");
var formArea = document.querySelector(".form-section");
var entrance = document.querySelector("[name=date-entrance]");
var form = document.querySelector("form");
var entrance = document.querySelector("[name=date-entrance]");
var departure = document.querySelector("[name=date-departure]");
var adults = document.querySelector("[name=adults-amount]");
var children = document.querySelector("[name=children-amount]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("adults");
} catch (err) {
    isStorageSupport = false;
} 

document.addEventListener("DOMContentLoaded", function (evt) {
    evt.preventDefault();
    formArea.classList.toggle("form-close");
})

formButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    formArea.classList.toggle("form-close");
    formArea.classList.remove("form-error");
    entrance.focus();
})

form.addEventListener("submit", function (evt) {
    if (!entrance.value || !departure.value || !adults.value || !children.value) {
        evt.preventDefault();
        formArea.classList.remove("form-error");
        formArea.offsetWidth = formArea.offsetWidth;
        formArea.classList.add("form-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("adults", adults.value);
            localStorage.setItem("children", children.value);
        }
    }

})
