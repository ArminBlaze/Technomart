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
            center: [59.93895, 30.3199],
            zoom: 17,
         		controls: ['zoomControl']
        });
			
			
			
			//Содержимое балуна в переменных
//			var hintStr='<b>'+Peka+'</b><br/>Кликни, чтобы увидеть детали.';
			var hintStr='<b>Техномарт</b><br/>Кликни, чтобы увидеть детали.';
			
			var headerStr="<div style='margin:5px 7px 7px 7px;'>Техномарт" +
            "<div class='news-item__title'>"+"Title"+"</div>" +
            "<div class='news-item__date'>"+"Date"+"</div>" +
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
