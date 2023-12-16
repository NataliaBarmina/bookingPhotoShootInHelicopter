function initYandexMap() {
    const mapContainerId = "map";
    const coordinates = [59.940312, 30.314601];

    ymaps.ready(() => {
        const map = new ymaps.Map(mapContainerId, {
            center: coordinates,
            zoom: 7
        });
        const placemark = new ymaps.Placemark(coordinates, {
            balloonContent: 'Встречаемся здесь!',
        });
        
        map.geoObjects.add(placemark);
    });
}

//показывает модальное окно
function initBookingForm() {
    const {bookingModal: {element, trigger}} = ELEMENTS;
    // const {element, trigger} = ELEMENTS.bookingModal;

    trigger.addEventListener('click', () => {
        const isModalHidden = element.classList.contains('dn');
        if (isModalHidden) {
            trigger.innerHTML = "Скрыть";
        } else {
            trigger.innerHTML = "Забронировать место";
        }
        
        element.classList.toggle('dn');
    });
}


// включает видео в окне с фото целующейся пары, при нажатии на треугольник
function initVideo() {
    const {videoPlayer: {elements, triggers}} = ELEMENTS;

    triggers.forEach((t, i) => {
        t.addEventListener('click', () => { 
            elements[i].style.zIndex = '3';
        });
    });
}


// показывает все фотографии
function initGallery() {
    const {gallery: {trigger, elements, triggerParts}} = ELEMENTS;

    const direction = {
        expand: {
            style: "rotate(0deg)",
            label: "Показать больше фото"
        },
        collapse:  {
            style: "rotate(180deg)",
            label: "Показать меньше фото"
        },
    };

    trigger.addEventListener('click', () => {
        const isGalleryCollapsed = elements[0].classList.contains('dn');
        const currentDir = isGalleryCollapsed ? 'collapse' : 'expand';

        elements.forEach((_i, index, _a) => {
            const {style, label} = direction[currentDir];
            
            elements[index].classList.toggle('dn');

            trigger.innerHTML = label;
            triggerParts[0].style.transform = style;
            triggerParts[1].style.transform = style;
        });
    });
}


function initShowMoreAboutPhotographer() {
    // показывает дополнительный текст о фотографе
    const {btnReadMore, hiddenText, arrowReadMore} = ELEMENTS;

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
}

// TO DO: rename this function to make it more obvious
function initAnotherShowMore() {
    // показывает информацию об авторе
    const {btnMoreInf, showMoreInf} = ELEMENTS;

    for (let i = 0; i < btnMoreInf.length; i += 1) {
        btnMoreInf[i].addEventListener('click', () => {
            showMoreInf[i].classList.toggle("dn");
        })
    }
}

function initDesktopFeedbackBlock() {
    // показывает количество отзывов и скрытые отзывы
    const {comments, btnShowComments,  hiddenComments, arrowComments} = ELEMENTS

    btnShowComments.innerHTML = `Показать Все (${comments.length})`;

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
}

function initMobileFeedbackBlock() {
    // показывает скрытые отзывы для маленького экрана
    const {comments, hiddenCommentsSC, arrowCommentsSC, btnShowCommentsSC} = ELEMENTS;

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
}

function initDesktopLanguageSwitcher() {
    // показывает выбор языка
    const {btnShowLanguage, arrowLanguage} = ELEMENTS

    btnShowLanguage.addEventListener('click', () => {
        if (btnShowLanguage.textContent === "RU") {
            btnShowLanguage.innerHTML = "EN";
        } else {
            btnShowLanguage.innerHTML = "RU";
        }
    })
}

function initMobileLanguageSwitcher() {
    // показывает выбор языка для маленького экрана
    const {btnShowLanguageSC, arrowLanguageSC} = ELEMENTS

    btnShowLanguageSC.addEventListener('click', () => {
        if (btnShowLanguageSC.textContent === "RU") {
            btnShowLanguageSC.innerHTML = "EN";
        } else {
            btnShowLanguageSC.innerHTML = "RU";
        }
    })
}


function initMobileFeedbackSlider() {
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
    const {slides, buttonPrevious, buttonNext} = ELEMENTS;

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
}