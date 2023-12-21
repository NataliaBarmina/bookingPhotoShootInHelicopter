const DIRECTION = {
    expand: {
        style: "rotate(0deg)",
        labelShowPhoto: "Показать больше фото",
        labelReadMore: "Читать еще",
        labelShowAll: "Показать все",
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

    // initDesktopFeedbackBlock, initMobileFeedbackBlock
    comments: document.querySelectorAll('.comment'),

    // initDesktopFeedbackBlock
    desktopFeedbackBlock: {
        trigger: document.querySelector('.js-desktopShowAll'),
        targets: document.querySelectorAll('.js-desktopHiddenComments'),
        targetPart: document.querySelector('.js-arrowDesktopComments'),
    },

    // initMobileFeedbackBlock
    mobileFeedbackBlock: {
        trigger: document.querySelector('.js-mobileShowAll'),
        targets: document.querySelectorAll('.js-mobileHiddenComments'),
        targetPart: document.querySelector('.js-arrowMobileComments'),
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