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


// !включает видео в окне с фото целующейся пары, при нажатии на треугольник
function initVideo() {
    const { videoPlayer: { targets, triggers } } = ELEMENTS;

    triggers.forEach((trigger, i) => {
        trigger.addEventListener('click', () => {
            targets[i].style.zIndex = '3';
        });
    });
}


// ! показывает все фотографии
function initGallery() {
    const { gallery: { trigger, targets, targetParts } } = ELEMENTS;

    trigger.addEventListener('click', () => {
        const isGalleryCollapsed = targets[0].classList.contains('dn');
        const currentDir = isGalleryCollapsed ? 'expanded' : 'collapsed';

        targets.forEach((_i, index, _a) => {
            const { style, labelShowPhoto } = STATE[currentDir];

            targets[index].classList.toggle('dn');

            trigger.innerHTML = labelShowPhoto;
            targetParts[0].style.transform = style;
            targetParts[1].style.transform = style;
        });
    });
}

// !показывает дополнительный текст о фотоcсессии
function initShowMoreAboutPhotoShoot() {
    const { moreAboutPhotoShoot: { triggers, targets, targetParts } } = ELEMENTS;

    triggers.forEach((trigger, i) => {
        trigger.addEventListener('click', () => {
            const isHiddenText = targets[i].classList.contains('dn');
            const currentDir = isHiddenText ? 'expanded' : 'collapsed';
            const { style, labelReadMore } = STATE[currentDir];

            targets[i].classList.toggle('dn');
            trigger.innerHTML = labelReadMore;
            targetParts[0].style.transform = style;
            targetParts[1].style.transform = style;
        })
    })
}

//! показывает дополнительный текст о фотографе
function initShowMoreAboutPhotographer() {
    const { moreAboutPhotographer: { triggers, targets } } = ELEMENTS;

    triggers.forEach((trigger, i) => {
        trigger.addEventListener('click', () => {
            targets[i].classList.toggle('dn');
        })
    })
}

// !показывает количество отзывов 
function initFeedBackCounter() {
    const { commentsLength, feedbackBlock: { triggers } } = ELEMENTS;

    for (let trigger of triggers) {
        trigger.innerHTML = `Показать Все (${commentsLength})`;
    }
}


//! показывает скрытые отзывы
function initFeedbackBlock() {
    const { feedbackBlock: { triggers, targets, targetParts } } = ELEMENTS

    // for (let i = 0; i < triggers.length; i += 1) {
    //     triggers[i].addEventListener('click', () => {
    //         const isHiddenComments = targets[0].classList.contains('dn');
    //         const currentDir = isHiddenComments ? 'expanded' : 'collapsed';
    //         const { style, labelShowAll } = STATE[currentDir];

    //         for (let target of targets) {
    //             target.classList.toggle('dn');
    //         }

    //         triggers[i].innerHTML = labelShowAll;
    //         targetParts[i] = style;
    //     })
    // }

    triggers.forEach((trigger, i) => {
        trigger.addEventListener('click', () => {
            const isHiddenComments = targets[0].classList.contains('dn');
            const currentDir = isHiddenComments ? 'expanded' : 'collapsed';
            const { style, labelShowAll } = STATE[currentDir];

            for (let target of targets) {
                target.classList.toggle('dn');
            }

            trigger.innerHTML = labelShowAll;
            targetParts[i] = style;
        })
    })
}


//! показывает выбор языка
function initLanguageSwitcher() {
    const { languageSelector: { triggers } } = ELEMENTS

    for (let i = 0; i < triggers.length; i += 1) {
        triggers[i].addEventListener('click', () => {
            if (triggers[i].textContent === "RU") {
                triggers[i].innerHTML = "EN";
            } else {
                triggers[i].innerHTML = "RU";
            }
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