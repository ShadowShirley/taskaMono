ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.549628, 49.554653],
            zoom: 6,
            controls: []
        }, {
            searchControlProvider: 'yandex#search',
            suppressMapOpenBlock: true
        }),
        myPlacemark = new ymaps.Placemark([54.516675, 40.317294], {
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/svg/метка.png',
            // Размеры метки.
            iconImageSize: [36, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-18, -42]
        }),
        myPlacemark2 = new ymaps.Placemark([55.908642, 49.308576], {
            hintContent: 'Собственный значок метки',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/svg/метка.png',
            // Размеры метки.
            iconImageSize: [36, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-18, -42]
        }),
        myPlacemark3 = new ymaps.Placemark([52.908642, 50.308576], {
            hintContent: 'Собственный значок метки',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/svg/метка.png',
            // Размеры метки.
            iconImageSize: [36, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-18, -42]
        });


    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemark2)
        .add(myPlacemark3)
});