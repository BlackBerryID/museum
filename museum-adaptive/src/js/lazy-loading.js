const lazyImages = document.querySelectorAll(
  "img[data-src], source[data-srcset]"
);
const lazyIframeBlocks = document.querySelectorAll(".video-swiper-slide");
const widnowHeight = document.documentElement.clientHeight;

let lazyImagesPos = [];
let lazyIframeBlocksPos = [];

if (lazyImages.length > 0) {
  lazyImages.forEach((img) => {
    if (img.dataset.src || img.dataset.srcset) {
      lazyImagesPos.push(img.getBoundingClientRect().top + scrollY);
      lazyScrollCheck();
    }
  });
}

if (lazyIframeBlocks.length > 0) {
  lazyIframeBlocks.forEach((block) => {
    if (block.dataset.src) {
      lazyIframeBlocksPos.push(block.getBoundingClientRect().top + scrollY);
      loadIframes();
    }
  });
}

window.addEventListener("scroll", lazyScroll);

function lazyScroll() {
  if (
    document.querySelectorAll("img[data-src], source[data-srcset]").length > 0
  ) {
    lazyScrollCheck();
  }

  if (
    Array.from(document.querySelectorAll(".video-swiper-slide")).filter(
      (item) => {
        if (!item.classList.contains("loaded")) {
          return item;
        }
      }
    ).length > 0
  ) {
    loadIframes();
  }
}

function lazyScrollCheck() {
  let imgIndex = lazyImagesPos.findIndex(
    (item) => scrollY > item - widnowHeight
  );
  if (imgIndex >= 0) {
    if (lazyImages[imgIndex].dataset.src) {
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
      lazyImages[imgIndex].removeAttribute("data-src");
    } else if (lazyImages[imgIndex].dataset.srcset) {
      lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
      lazyImages[imgIndex].removeAttribute("data-srcset");
    }
    delete lazyImagesPos[imgIndex];
  }
}

function loadIframes() {
  let iframeBlockIndex = lazyIframeBlocksPos.findIndex(
    (item) => scrollY > item - widnowHeight
  );
  if (iframeBlockIndex >= 0) {
    let loadIframeUrl = lazyIframeBlocks[iframeBlockIndex].dataset.src;
    if (loadIframeUrl) {
      lazyIframeBlocks[iframeBlockIndex].insertAdjacentHTML(
        "beforeend",
        `<iframe
      width="560"
      height="315"
      src="${loadIframeUrl}"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>`
      );
      lazyIframeBlocks[iframeBlockIndex].classList.add("loaded");
      delete lazyIframeBlocksPos[iframeBlockIndex];
    }
  }
}
