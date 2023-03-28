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

function createSlidingBanner() {
  const slidingImageArray = Array.from(cachedDOM.$slidingImageList);
  const currentImageIndex = 0;
  return { slidingImageArray, currentImageIndex };
}

function bindSlidingImagesNavButtons() {}

bindSlidingImagesNavButtons();
