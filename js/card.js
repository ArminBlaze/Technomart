"use strict";
var buy = document.querySelector(".card__buy");
var popup = document.querySelector(".modalBuy");
var close = popup.querySelector(".modalBuy__close");
var close2 = popup.querySelector(".modalBuy__button_close");

buy.addEventListener("click", function (e) {
	e.preventDefault();
	popup.classList.add("modalShow");
	
});

close.addEventListener("click", function (e) {
	e.preventDefault();
	popup.classList.remove("modalShow");
});

close2.addEventListener("click", function (e) {
	e.preventDefault();
	popup.classList.remove("modalShow");
});

window.addEventListener("keydown", function(e) {
	if (e.keyCode === 27 && popup.classList.contains("modalShow")) {
		popup.classList.remove("modalShow");
	}
})