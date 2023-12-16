// IIFE - invoke function immediately. We don't need this function anymore after
// map initialization - so we can define it and call it in the same place
(function initYandexMap() {
    ymaps.ready(() => {
        const myMap = new ymaps.Map("map", {
            center: [59.940312, 30.314601],
            zoom: 7
        });
        const myPlacemark = new ymaps.Placemark([59.940312, 30.314601], {
            balloonContent: 'Встречаемся здесь!',
        });
        myMap.geoObjects.add(myPlacemark);
    });
})();

 //показывает модальное окно
 const modalWindow = document.querySelector('.orderForm');
 const buttonBooking = document.querySelector('.buttonBooking');

 buttonBooking.addEventListener('click', () => {
     if (modalWindow.classList.contains('dn')) {
         modalWindow.classList.remove('dn');
         buttonBooking.innerHTML = "Скрыть";
     } else {
         modalWindow.classList.add('dn');
         buttonBooking.innerHTML = "Забронировать место";
     }
 });

 // включает видео в окне с фото целующейся пары, при нажатии на треугольник
 const vector = document.querySelectorAll('.vector');
 const video = document.querySelectorAll('.video')

 for (let i = 0; i < vector.length; i += 1) {
     vector[i].addEventListener('click', () => { video[i].style.zIndex = '3' });
 }


 // показывает все фотографии
 const btnShowPhoto = document.querySelector('.containerShowAllPhoto .showAllPhoto');
 const hiddenPhotos = document.querySelectorAll('.gallery .dn');
 const arrow = document.querySelectorAll('.containerShowAllPhoto .arrowContainer');

 btnShowPhoto.addEventListener('click', () => {
     const isVisible = !hiddenPhotos[0].classList.contains('dn');
     if (isVisible) {
         hiddenPhotos.forEach((item, index, array) => {
             hiddenPhotos[index].classList.add('dn');
             btnShowPhoto.innerHTML = "Показать больше фото";
             arrow[0].style.transform = "rotate(0deg)";
             arrow[1].style.transform = "rotate(0deg)";
         })
     } else {
         hiddenPhotos.forEach((item, index, array) => {
             hiddenPhotos[index].classList.remove('dn');
             btnShowPhoto.innerHTML = "Показать меньше фото";
             arrow[0].style.transform = "rotate(180deg)";
             arrow[1].style.transform = "rotate(180deg)";
         })
     }
 });

 // показывает дополнительный текст о фотографе
 const btnReadMore = document.querySelectorAll('.textAboutPhotographer .tal .showAll');
 const hiddenText = document.querySelectorAll('.textAboutPhotographer .dn');
 const arrowReadMore = document.querySelectorAll('.textAboutPhotographer .tal .arrowContainer');

 for (let i = 0; i < btnReadMore.length; i += 1) {
     btnReadMore[i].addEventListener('click', () => {
         if (hiddenText[i].classList.contains('dn')) {
             hiddenText[i].classList.remove('dn');
             btnReadMore[i].innerHTML = "Скрыть";
             arrowReadMore[i].style.transform = "rotate(180deg)";
         } else {
             hiddenText[i].classList.add('dn');
             btnReadMore[i].innerHTML = "Читать еще";
             arrowReadMore[i].style.transform = "rotate(0deg)";
         }
     }
     )
 }

 // показывает информацию об авторе
 const btnMoreInf = document.querySelectorAll('.buttonMoreInformation');
 const showMoreInf = document.querySelectorAll('.moreInformation');

 for (let i = 0; i < btnMoreInf.length; i += 1) {
     btnMoreInf[i].addEventListener('click', () => {
         showMoreInf[i].classList.toggle("dn");
     })
 }

 // показывает количество отзывов и скрытые отзывы
 const comments = document.querySelectorAll('.comments .comment');
 const btnShowComments = document.querySelector('.comments .tar .showAll');
 btnShowComments.innerHTML = `Показать Все (${comments.length})`;

 const hiddenComments = document.querySelectorAll('.comments .dn');
 const arrowComments = document.querySelector('.comments .tar .arrowContainer')
 btnShowComments.addEventListener('click', () => {
     if (hiddenComments[0].classList.contains('dn')) {
         hiddenComments.forEach((item, index, array) => {
             hiddenComments[index].classList.remove('dn');
             btnShowComments.innerHTML = "Скрыть";
             arrowComments.style.transform = "rotate(180deg)";
         })
     } else {
         hiddenComments.forEach((item, index, array) => {
             hiddenComments[index].classList.add('dn');
             btnShowComments.innerHTML = `Показать Все (${comments.length})`;
             arrowComments.style.transform = "rotate(0deg)";
         })
     }
 })

 // показывает скрытые отзывы для маленького экрана
 const hiddenCommentsSC = document.querySelectorAll('.forSmallScreen .dn');
 const arrowCommentsSC = document.querySelector('.forSmallScreen .tac .arrowContainer')
 const btnShowCommentsSC = document.querySelector('.forSmallScreen .tac .showAll');

 btnShowCommentsSC.innerHTML = `Показать Все (${comments.length})`;
 btnShowCommentsSC.addEventListener('click', () => {
     if (hiddenCommentsSC[0].classList.contains('dn')) {
         hiddenCommentsSC.forEach((item, index, array) => {
             hiddenCommentsSC[index].classList.remove('dn');
             btnShowCommentsSC.innerHTML = "Скрыть";
             arrowCommentsSC.style.transform = "rotate(180deg)";
         })
     } else {
         hiddenCommentsSC.forEach((item, index, array) => {
             hiddenCommentsSC[index].classList.add('dn');
             btnShowCommentsSC.innerHTML = `Показать Все (${comments.length})`;
             arrowCommentsSC.style.transform = "rotate(0deg)";
         })
     }
 })
 // показывает выбор языка
 const btnShowLanguage = document.querySelector('.footerTop .flex .showAll');
 const arrowLanguage = document.querySelector('.footerTop .flex .arrowContainer');

 btnShowLanguage.addEventListener('click', () => {
     if (btnShowLanguage.textContent === "RU") {
         btnShowLanguage.innerHTML = "EN";
     } else {
         btnShowLanguage.innerHTML = "RU";
     }
 })

 // показывает выбор языка для маленького экрана
 const btnShowLanguageSC = document.querySelector('.language .showAll');
 const arrowLanguageSC = document.querySelector('.language .arrowContainer');

 btnShowLanguageSC.addEventListener('click', () => {
     if (btnShowLanguageSC.textContent === "RU") {
         btnShowLanguageSC.innerHTML = "EN";
     } else {
         btnShowLanguageSC.innerHTML = "RU";
     }
 })


 // / !слайдер /
 // const slides = document.getElementsByClassName("whereDoWeMeet");
 // const buttonPrevious = document.querySelector('.previous');
 // const buttonNext = document.querySelector('.next');

 // buttonPrevious.addEventListener('click', previousSlide);
 // buttonNext.addEventListener('click', nextSlide);

 // let slideIndex = 1;
 // showSlides(slideIndex);

 // function nextSlide() { /* следующий слайд */
 //     showSlides(slideIndex += 1);
 // }
 // function previousSlide() { /*  предыдущий слайд */
 //     showSlides(slideIndex -= 1);
 // }
 // function showSlides(n) {
 //     if (n > slides.length) { /* Проверяем количество слайдов: */
 //         slideIndex = 1
 //     }
 //     if (n < 1) {
 //         slideIndex = slides.length
 //     }
 //     for (let slide of slides) {
 //         slide.style.display = "none";
 //     }
 //     slides[slideIndex - 1].style.display = "block"; /* Делаем элемент блочным: */
 // }


 //!!!мое решение 
 const slides = document.getElementsByClassName("whereDoWeMeet");
 const buttonPrevious = document.querySelector('.previous');
 const buttonNext = document.querySelector('.next');

 function showFirstSlide() {
     for (let i = 0; i < slides.length; i += 1) { //показываем только первый слайд
         slides[i].classList.add('dn');
     }
     slides[0].classList.remove('dn');
 }
 showFirstSlide();

 buttonPrevious.addEventListener('click', previousSlide);
 buttonNext.addEventListener('click', nextSlide);

 let slideIndex = 0;

 function nextSlide() {
     if (slideIndex >= slides.length - 1) {
         slideIndex = 0;
     } else {
         slideIndex += 1;
     }
     for (let i = 0; i < slides.length; i += 1) {
         slides[i].classList.add('dn');
     }
     slides[slideIndex].classList.remove('dn');
 }

 function previousSlide() {
     if (slideIndex === 0) {
         slideIndex = slides.length - 1;
     } else {
         slideIndex -= 1;
     }
     for (let i = 0; i < slides.length; i += 1) {
         slides[i].classList.add('dn');
     }
     slides[slideIndex].classList.remove('dn');
 }
