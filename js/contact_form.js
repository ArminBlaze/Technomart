"use strict";

var about = document.querySelector(".info__about");
var popup2 = document.querySelector(".modal_form");

var form = popup2.querySelector("form");

var userName = popup2.querySelector("[name=name]");
var email = popup2.querySelector("[name=email]");
var text = popup2.querySelector("[name=text]");


	about.addEventListener("click", function (e) {
		e.preventDefault();
		popup2.classList.add("modalShow");
		userName.focus();
		
		form.addEventListener("submit", function(e){
			if(!userName.value || !email.value || !text.value) {
				event.preventDefault();
				console.log("Введите имя, почту и текст письма");
			}
		});
	});


	

