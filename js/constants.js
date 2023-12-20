const DIRECTION = {
    expand: {
        style: "rotate(0deg)",
        labelShowPhoto: "Показать больше фото",
        labelReadMore: "Читать еще",
        labelShowall: "Показать все",
        labelRU: "RU",
    },
    collapse: {
        style: "rotate(180deg)",
        labelShowPhoto: "Показать меньше фото",
        labelHide: "Скрыть",
        labelEN: "EN",
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
        trigger: document.querySelector('.containerShowAllPhoto .showAllPhoto'),
        targets: document.querySelectorAll('.js-additionalGalleryPhoto'),
        targetParts: document.querySelectorAll('.containerShowAllPhoto .arrowContainer'),
    },
    // initShowMoreAboutPhotoShoot

    moreAboutPhotoShoot: {
        triggers: document.querySelectorAll('.textAboutPhotoShoot .tal .showAll'),
        targets: document.querySelectorAll('.textAboutPhotoShoot .dn'),
        targetParts: document.querySelectorAll('.textAboutPhotoShoot .tal .arrowContainer'),
    },

    // initShowMoreAboutPhotographer
    moreAboutPhotographer: {
        triggers: document.querySelectorAll('.buttonMoreInformation'),
        targets: document.querySelectorAll('.moreInformation'),
    },

    // initDesktopFeedbackBlock, initMobileFeedbackBlock
    comments: document.querySelectorAll('.comments .comment'),

    // initDesktopFeedbackBlock
    desktopFeedbackBlock: {
        trigger: document.querySelector('.comments .tar .showAll'),
        targets: document.querySelectorAll('.comments .dn'),
        targetPart: document.querySelector('.comments .tar .arrowContainer'),
    },

    // initMobileFeedbackBlock
    mobileFeedbackBlock: {
        trigger: document.querySelector('.forSmallScreen .tac .showAll'),
        targets: document.querySelectorAll('.forSmallScreen .dn'),
        targetPart: document.querySelector('.forSmallScreen .tac .arrowContainer'),
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
    // slides: 
    // buttonPrevious: 
    // buttonNext: 
}