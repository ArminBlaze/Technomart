"use strict";

var about = document.querySelector(".info__contact");
var popup2 = document.querySelector(".modal_form");

var form = popup2.querySelector("form");

var userName = popup2.querySelector("[name=name]");
var email = popup2.querySelector("[name=email]");
var text = popup2.querySelector("[name=text]");
var storage = localStorage.getItem("userName");
var storage2 = localStorage.getItem("email");


	about.addEventListener("click", function (e) {
		e.preventDefault();
		
		if(popup2.classList.contains("modalError")) {
					popup2.classList.remove("modalError");
		}
		
		popup2.classList.add("modalShow");
		
		if (storage) {
			userName.value = storage;
			email.focus();
		}
		
		if (storage2) {
			email.value = storage2;
			text.focus();
		}
		else {
			userName.focus();
		}
		
		form.addEventListener("submit", function(e){
			
			if(!userName.value || !email.value || !text.value) {
				e.preventDefault();
				console.log("Введите имя, почту и текст письма");
				
				popup2.classList.add("modalError");
				
				
			}
			else {
				localStorage.setItem("userName", userName.value);
				localStorage.setItem("email", email.value);
			}
			
		});
	});


	

