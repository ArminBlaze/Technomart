"use strict";
var buy = document.querySelectorAll(".card__buy");
var modal = document.querySelectorAll(".modal");
var popup = document.querySelector(".modal_buy");
var close = popup.querySelector(".modal__close");
var close2 = popup.querySelector(".modal__button_close");
//alert(buy);

for(var i = 0; i < buy.length; i++) {
	buy[i].addEventListener("click", function (e) {
		e.preventDefault();
		popup.classList.add("modalShow");
		//взять card__title
	});
}
	
//close.addEventListener("click", function (e) {
//	e.preventDefault();
//	popup.classList.remove("modalShow");
//});

for(var a = 0; a < modal.length; a++) {
	var close = modal[a].querySelector(".modal__close");
	close.addEventListener("click", function (e) {
		e.preventDefault();
		
		for(var b = 0; b < modal.length; b++) {
			if (modal[b].classList.contains("modalShow"))
			modal[b].classList.remove("modalShow");
		}
	});
}

window.addEventListener("keydown", function(e) {
	if (e.keyCode === 27) { 	 
		for(var a = 0; a < modal.length; a++) {
			if (modal[a].classList.contains("modalShow"))
			modal[a].classList.remove("modalShow");
		}
	}
})

close2.addEventListener("click", function (e) {
	e.preventDefault();
	popup.classList.remove("modalShow");
});
