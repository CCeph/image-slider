function createDOMCache() {
  const $bannerLeftArrow = document.querySelector("[data-left-arrow]");
  const $bannerRightArrow = document.querySelector("[data-right-arrow]");
  const $slidingImageList = document.querySelectorAll("[data-sliding-image]");
  const $selectBannerImageButtonList = document.querySelectorAll(
    "[data-select-banner-image-button]"
  );
  return {
    $bannerLeftArrow,
    $bannerRightArrow,
    $slidingImageList,
    $selectBannerImageButtonList,
  };
}

const cachedDOM = createDOMCache();

function createSlidingBanner(slidingBannerList) {
  const slidingImageArray = Array.from(slidingBannerList);
  let currentImageIndex = 0;

  const getCurrentImageIndex = () => currentImageIndex;
  function setCurrentImageIndex(newIndex) {
    currentImageIndex = newIndex;
  }
  const getSlidingImageArray = () => slidingImageArray;
  return {
    slidingImageArray,
    currentImageIndex,
    getCurrentImageIndex,
    setCurrentImageIndex,
    getSlidingImageArray,
  };
}

const slidingHomeBanner = createSlidingBanner(cachedDOM.$slidingImageList);

function createBannerMotionHandler() {
  function moveBannerToPreviousElement() {}

  return { moveBannerToPreviousElement };
}

const HomeBannerMotionHandler = createBannerMotionHandler();

function bindSlidingImagesNavButtons() {
  cachedDOM.$bannerLeftArrow.addEventListener(
    "click",
    HomeBannerMotionHandler.moveBannerToPreviousElement
  );
}

bindSlidingImagesNavButtons();
