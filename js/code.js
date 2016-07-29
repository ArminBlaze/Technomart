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
		
		if (mapWindow.classList.contains("mapShow"))
			mapWindow.classList.remove("mapShow");
		
		mapClick.style.zIndex="1";
	}
});

close2.addEventListener("click", function (e) {
	e.preventDefault();
	popup.classList.remove("modalShow");
});


// Contact form

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


	

// Map init 

var mapWindow = document.querySelector(".info__map");
var mapClick = document.querySelector(".map__click");
var map = document.querySelector(".map__hover");
var closeMap = map.querySelector(".modal__close");

function ready() {

	mapWindow.classList.remove("info__map_nojs");

	mapClick.addEventListener("click", function (e) {
		mapWindow.classList.add("mapShow");	
		mapClick.style.zIndex="-1";
	});

		closeMap.addEventListener("click", function (e) {
			e.preventDefault();
				if (mapWindow.classList.contains("mapShow"))
				mapWindow.classList.remove("mapShow");
				mapClick.style.zIndex="1";

		});
	
	ymaps.ready(init);
}

 document.addEventListener("DOMContentLoaded", ready);


//Yandex map

  
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.93895, 30.3199],
            zoom: 17,
         		controls: ['zoomControl']
        });
			
			
			
			//Содержимое балуна в переменных
//			var hintStr='<b>'+Peka+'</b><br/>Кликни, чтобы увидеть детали.';
			var hintStr='<b>Техномарт</b><br/>Кликни, чтобы увидеть детали.';
			
			var headerStr="<div style='margin:5px 7px 7px 7px;'>" +
            "<div class='map__title'>"+"Техномарт"+"</div>" +
            "<div class='map__phone'>"+"+7 (812) 555-05-55"+"</div>" +
            "<div class='margin-top:-5px;'><a href='"+'#adress'+"' class='news-item__date'>Перейти на страницу магазина</a></div>" +
            "</div>";
			
			var iconStr = "<div class='map__text'>Большая конюшенная ул., 19" +
            "</div>";
			
			var coords = [59.938653, 30.323085];

      myPlacemark = new ymaps.Placemark(coords, { 
				hintContent: hintStr, 
				balloonContent: headerStr,
				iconContent: iconStr
			}, {
				//Опции
				//Необходимо указать данный тип макета.
				iconLayout: 'default#imageWithContent',
				//Своё изображение иконки метки(путь из корня сайта).
				iconImageHref: '../img/map__bullet.png',
				//Размеры метки
				iconImageSize: [22, 43],
				//Смещение левого верхнего угла иконки относительно ее "ножки" (точки привязки).
				iconImageOffset: [-11, -40]
				
					
					
			});

			myMap.geoObjects.add(myPlacemark);
			
//			getAddress(coords);
			// Определяем адрес по координатам (обратное геокодирование).
//    	function getAddress(coords) {
//        myPlacemark.properties.set('iconContent', 'поиск...');
//        ymaps.geocode(coords).then(function (res) {
//            var firstGeoObject = res.geoObjects.get(0);
//
//            myPlacemark.properties
//                .set({
//                    iconContent:
//										
//										"<div class='map__text'>" + firstGeoObject.properties.get('name') +
//            "</div>",
//                    balloonContent: "Техномарт на Дворцовой площади"
//                });
//        });
//    	}
    }
