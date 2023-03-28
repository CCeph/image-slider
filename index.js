function createDOMCache() {
  const $bannerLeftArrow = document.querySelector("[data-left-arrow]");
  const $bannerRightArrow = document.querySelector("[data-right-arrow]");
  const $slidingImageList = document.querySelectorAll("[data-sliding-image]");
  const $selectBannerImageButtonList = document.querySelectorAll(
    "[data-select-banner-image-button]"
  );
  const $slidingBanner = document.querySelector("[data-sliding-banner]");
  return {
    $bannerLeftArrow,
    $bannerRightArrow,
    $slidingImageList,
    $selectBannerImageButtonList,
    $slidingBanner,
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
  const getSlidingImageArrayLength = () => slidingImageArray.length;
  return {
    slidingImageArray,
    currentImageIndex,
    getCurrentImageIndex,
    setCurrentImageIndex,
    getSlidingImageArray,
    getSlidingImageArrayLength,
  };
}

const slidingHomeBanner = createSlidingBanner(cachedDOM.$slidingImageList);

function createBannerMotionHandler(banner) {
  function moveBannerToPreviousElement() {
    if (banner.getCurrentImageIndex === 0) {
      const newImageIndex = slidingHomeBanner.getSlidingImageArrayLength() - 1;
    }
  }

  return { moveBannerToPreviousElement };
}

const HomeBannerMotionHandler = createBannerMotionHandler(slidingHomeBanner);

function bindSlidingImagesNavButtons() {
  cachedDOM.$bannerLeftArrow.addEventListener(
    "click",
    HomeBannerMotionHandler.moveBannerToPreviousElement
  );
}

bindSlidingImagesNavButtons();
