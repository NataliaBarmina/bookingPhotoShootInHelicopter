// !ДОБАВЛЯЕТ ЯНДЕКС КАРТУ, МЕТКУ, при нажатии на метку открывается балун с текстом, но метка не скрывается
function initYandexMap() {
    const mapContainerId = "map";
    const coordinates = [59.940312, 30.314601];

    ymaps.ready(() => {
        const map = new ymaps.Map(mapContainerId, {
            center: coordinates,
            zoom: 7
        });
        const placemark = new ymaps.Placemark(coordinates, {
            balloonContentHeader: 'Встречаемся здесь!',
        }, {
            hideIconOnBalloonOpen: false,
            balloonOffset: [3, -40]
        });

        map.geoObjects.add(placemark);
    });
}

// !показывает реальное количество отзывов 
function initFeedBackCounter() {
    const { commentsLength, feedbackBlock: { triggers } } = ELEMENTS;

    for (let trigger of triggers) {
        trigger.innerHTML = `Показать Все (${commentsLength})`;
    }
}

// !включает видео в окне с фото целующейся пары, при нажатии на треугольник
function initVideo() {
    const { videoPlayer: { targets, triggers } } = ELEMENTS;

    triggers.forEach((trigger, i) => {
        trigger.addEventListener('click', () => {
            targets[i].style.zIndex = '3';
        });
    });
}


//!показывает модальное окно
function initBookingForm() {
    const { bookingModal: { target, trigger } } = ELEMENTS;

    trigger.addEventListener('click', () => {
        const isModalHidden = target.classList.contains('dn');
        const currentDir = isModalHidden ? 'expanded' : 'collapsed';
        const { labelBookPlace } = STATE[currentDir];

        trigger.innerHTML = labelBookPlace;
        target.classList.toggle('dn');
    });
}

//! показывает дополнительный текст о фотографе
function initShowMoreAboutPhotographer() {
    document.body.addEventListener('click', (event) => {
        const eventTarget = event.target;
        if (!eventTarget.classList.contains('buttonMoreInformation')) return;
        const changeElem = eventTarget.nextElementSibling;
        changeElem.classList.toggle('dn');
    })
}

// ! показывает дополнительный текст о фотосъемке
function initShowMoreAboutPhotoShoot() {
    const { moreAboutPhotoShoot: { targetParts } } = ELEMENTS;
    document.body.addEventListener('click', (event) => {
        const eventTarget = event.target;
        if (!eventTarget.classList.contains('js-readMore')) return;

        const changeElem = eventTarget.closest('.tal').previousElementSibling;
        changeElem.classList.toggle('dn');

        const isHiddenText = changeElem.classList.contains('dn');
        const currentDir = isHiddenText ? 'collapsed' : 'expanded';
        const { style, labelReadMore } = STATE[currentDir];
        eventTarget.innerHTML = labelReadMore;

        const targetPart = eventTarget.nextElementSibling;
        targetPart.style.transform = style;

    })
}

// ! показывает все фотографии
function initGallery() {
    const { gallery: { trigger, targets, targetParts } } = ELEMENTS;

    trigger.addEventListener('click', () => {
        const isGalleryCollapsed = targets[0].classList.contains('dn');
        const currentDir = isGalleryCollapsed ? 'expanded' : 'collapsed';

        targets.forEach((_i, i) => {
            const { style, labelShowPhoto } = STATE[currentDir];

            targets[i].classList.toggle('dn');

            trigger.innerHTML = labelShowPhoto;
            targetParts[0].style.transform = style;
            targetParts[1].style.transform = style;
        });
    });
}

//! показывает скрытые отзывы
function initFeedbackBlock() {

    document.body.addEventListener('click', (event) => {
        const eventTarget = event.target;
        if (!eventTarget.classList.contains('js-showAll')) return;

        const changeElems = eventTarget.closest('.js-comments').querySelectorAll('.js-hiddenComments');

        for (let changeElem of changeElems) {
            changeElem.classList.toggle('dn');
        }
        const isHiddenComments = changeElems[0].classList.contains('dn');
        const currentDir = isHiddenComments ? 'collapsed' : 'expanded';
        const { style, labelShowAll } = STATE[currentDir];

        eventTarget.innerHTML = labelShowAll;

        const targetPart = eventTarget.nextElementSibling;
        targetPart.style.transform = style;
    })
}

//! показывает выбор языка
function initLanguageSwitcher() {
    const { languageSelector: { triggers } } = ELEMENTS

    for (let trigger of triggers) {
        trigger.addEventListener('click', () => {
            const nextLanguage = trigger.textContent === "RU" ? "EN" : "RU";
            trigger.innerHTML = nextLanguage;
        })
    }
}

//  !слайдер /
function initMobileFeedbackSlider() {
    const { mobileSlider: { triggerPrevious, triggerNext, targets } } = ELEMENTS;

    triggerPrevious.addEventListener('click', previousSlide);
    triggerNext.addEventListener('click', nextSlide);

    let slideIndex = 1;
    showSlides(slideIndex);

    function nextSlide() { /* следующий слайд */
        showSlides(slideIndex += 1);
    }
    function previousSlide() { /*  предыдущий слайд */
        showSlides(slideIndex -= 1);
    }
    function showSlides(n) {
        if (n > targets.length) { /* Проверяем количество слайдов: */
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = targets.length
        }
        for (let slide of targets) {
            slide.style.display = "none";
        }
        targets[slideIndex - 1].style.display = "block"; /* Делаем элемент блочным: */
    }

    //!!!мое решение 
    // function showFirstSlide() {
    //     for (let i = 0; i < targets.length; i += 1) { //показываем только первый слайд
    //         targets[i].classList.add('dn');
    //     }
    //     targets[0].classList.remove('dn');
    // }
    // showFirstSlide();

    // triggerPrevious.addEventListener('click', previousSlide);
    // triggerNext.addEventListener('click', nextSlide);

    // let slideIndex = 0;

    // function nextSlide() {
    //     if (slideIndex >= targets.length - 1) {
    //         slideIndex = 0;
    //     } else {
    //         slideIndex += 1;
    //     }
    //     for (let i = 0; i < targets.length; i += 1) {
    //         targets[i].classList.add('dn');
    //     }
    //     targets[slideIndex].classList.remove('dn');
    // }

    // function previousSlide() {
    //     if (slideIndex === 0) {
    //         slideIndex = targets.length - 1;
    //     } else {
    //         slideIndex -= 1;
    //     }
    //     for (let i = 0; i < targets.length; i += 1) {
    //         targets[i].classList.add('dn');
    //     }
    //     targets[slideIndex].classList.remove('dn');
    // }
}