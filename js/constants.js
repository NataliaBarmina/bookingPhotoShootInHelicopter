
const ELEMENTS = {

    // initBookingForm: modal window in the top
    bookingModal: {
        trigger: document.querySelector('.buttonBooking'),
        target: document.querySelector('.orderForm'),
    },
    // initVideo: youtube player
    videoPlayer: {
        triggers: document.querySelectorAll('.vector'),
        targets: document.querySelectorAll('.video')
    },
    // initGallery  
    gallery: {
        trigger: document.querySelector('.showAllPhoto'),
        targets: document.querySelectorAll('.js-additionalGalleryPhoto'),
        targetParts: document.querySelectorAll('.js-arrowGallery'),
    },
    // initShowMoreAboutPhotoShoot

    moreAboutPhotoShoot: {
        triggers: document.querySelectorAll('.js-readMore'),
        targets: document.querySelectorAll('.js-hiddenText'),
        targetParts: document.querySelectorAll('.js-arrowPhotoShoot'),
    },

    // initShowMoreAboutPhotographer
    moreAboutPhotographer: {
        triggers: document.querySelectorAll('.buttonMoreInformation'),
        targets: document.querySelectorAll('.moreInformation'),
    },

    // iniFeedbackBlock
    commentsLength: document.querySelectorAll('.comment').length / 2,
    feedbackBlock: {
        triggers: document.querySelectorAll('.js-showAll'),
        targets: document.querySelectorAll('.js-hiddenComments'),
        targetParts: document.querySelectorAll('.js-arrowComments'),
    },

    // initLanguageSwitcher
    languageSelector: {
        triggers: document.querySelectorAll('.js-languageSelection'),
    },

    // initMobileFeedbackSlider
    mobileSlider: {
        triggerPrevious: document.querySelector('.previous'),
        triggerNext: document.querySelector('.next'),
        targets: document.getElementsByClassName("whereDoWeMeet"),
    },
}

const DIRECTION = {

    expand: {
        style: "rotate(0deg)",
        labelShowPhoto: "Показать больше фото",
        labelReadMore: "Читать еще",
        labelShowAll: `Показать Все (${ELEMENTS.commentsLength})`,
        labelBookPlace: "Забронировать место",
    },
    collapse: {
        style: "rotate(180deg)",
        labelShowPhoto: "Показать меньше фото",
        labelReadMore: "Скрыть",
        labelShowAll: "Скрыть",
        labelBookPlace: "Скрыть",
    }
}