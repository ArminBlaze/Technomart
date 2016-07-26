var mapWindow = document.querySelector(".info__map");
var mapClick = document.querySelector(".map__click");
var map = document.querySelector(".map__hover");
var closeMap = map.querySelector(".modal__close");

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



//Yandex map

  ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.941, 30.2996],
            zoom: 15,
         		controls: ['zoomControl']
        });
			
			
			
			//Содержимое балуна в переменных
//			var hintStr='<b>'+Peka+'</b><br/>Кликни, чтобы увидеть детали.';
			var hintStr='<b>OLOLO</b><br/>Кликни, чтобы увидеть детали.';
			
			var headerStr="<div style='margin:5px 7px 7px 7px;'>PEKA" +
            "<div class='news-item__title'>"+"Title"+"</div>" +
            "<div class='news-item__date'>"+"Date"+"</div>" +
            "<div class='margin-top:-5px;'><a href='"+'#adress'+"' class='news-item__date'>Перейти на страницу магазина</a></div>" +
            "</div>";

        myPlacemark = new ymaps.Placemark([59.93895, 30.3150017], { 
            hintContent: hintStr, 
            balloonContent: headerStr 
        }, {
					//Опции
					//Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					//Своё изображение иконки метки(путь из корня сайта).
					iconImageHref: 'img/map_bullet.png',
					//Размеры метки
					iconImageSize: [231, 190],
					//Смещение левого верхнего угла иконки относительно ее "ножки" (точки привязки).
					iconImageOffset: [-49, -188]
				
					
					
				});

        myMap.geoObjects.add(myPlacemark);
    }