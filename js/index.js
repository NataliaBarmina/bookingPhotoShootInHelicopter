// IIFE - invoke function immediately. We don't need this function anymore after
// application initialization - so we can define it and call it in the same place
(function initApp() {
    initBookingForm();
    initVideo();
    initGallery();
    initShowMoreAboutPhotographer();
    initShowMoreAboutPhotoShoot();
    initYandexMap();
    initLanguageSwitcher();
    initFeedBackCounter();
    initFeedbackBlock();

    initMobileFeedbackSlider();
})();

