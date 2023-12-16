const ELEMENTS = {
    // initBookingForm: modal window in the top
    bookingModal: {
        trigger: document.querySelector('.buttonBooking'),
        element: document.querySelector('.orderForm'),
    },
    // initVideo: youtube player
    videoPlayer: {
        triggers: document.querySelectorAll('.vector'),
        elements: document.querySelectorAll('.video')
    },
    // initGallery  
    btnShowPhoto: document.querySelector('.containerShowAllPhoto .showAllPhoto'),
    hiddenPhotos: document.querySelectorAll('.gallery .dn'),
    arrow: document.querySelectorAll('.containerShowAllPhoto .arrowContainer'),
    // initShowMoreAboutPhotographer
    btnReadMore: document.querySelectorAll('.textAboutPhotographer .tal .showAll'),
    hiddenText: document.querySelectorAll('.textAboutPhotographer .dn'),
    arrowReadMore: document.querySelectorAll('.textAboutPhotographer .tal .arrowContainer'),
    // initAnotherShowMore
    btnMoreInf: document.querySelectorAll('.buttonMoreInformation'),
    showMoreInf: document.querySelectorAll('.moreInformation'),
    // initDesktopFeedbackBlock, initMobileFeedbackBlock
    comments: document.querySelectorAll('.comments .comment'),
    // initDesktopFeedbackBlock
    btnShowComments: document.querySelector('.comments .tar .showAll'),
    hiddenComments: document.querySelectorAll('.comments .dn'),
    arrowComments: document.querySelector('.comments .tar .arrowContainer'),
    // initMobileFeedbackBlock
    hiddenCommentsSC: document.querySelectorAll('.forSmallScreen .dn'),
    arrowCommentsSC: document.querySelector('.forSmallScreen .tac .arrowContainer'),
    btnShowCommentsSC: document.querySelector('.forSmallScreen .tac .showAll'),
    // initDesktopLanguageSwitcher
    btnShowLanguage: document.querySelector('.footerTop .flex .showAll'),
    arrowLanguage: document.querySelector('.footerTop .flex .arrowContainer'), // NOT USED
    // initMobileLanguageSwitcher
    btnShowLanguageSC: document.querySelector('.language .showAll'),
    arrowLanguageSC: document.querySelector('.language .arrowContainer'), // NOT USED
    // initMobileFeedbackSlider
    slides: document.getElementsByClassName("whereDoWeMeet"),
    buttonPrevious: document.querySelector('.previous'),
    buttonNext: document.querySelector('.next'),
}