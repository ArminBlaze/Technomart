"use strict";
var buy = document.querySelectorAll(".card__buy");
var popup = document.querySelector(".modalBuy");
var close = popup.querySelector(".modalBuy__close");
var close2 = popup.querySelector(".modalBuy__button_close");
//alert(buy);

for(var i = 0; i < buy.length; i++) {
	buy[i].addEventListener("click", function (e) {
		e.preventDefault();
		popup.classList.add("modalShow");
		//взять card__title
	});
}
	
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