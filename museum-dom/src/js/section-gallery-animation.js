function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll(".gallery-img");

function showImages(e) {
  // console.count(e);
  images.forEach((image) => {
    // half way through the image
    const slideInAt = window.scrollY + window.innerHeight;
    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = slideInAt > image.offsetTop;

    if (isHalfShown) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
}

// trigger scroll event only over section gallery to call showImages function after page reload
setTimeout(
  () => document.addEventListener("scroll", debounce(showImages)),
  100
);
setTimeout(() => triggerScroll(), 150);

const sectionGallery = document.querySelector("#gallery");

function triggerScroll() {
  let galleryTop = sectionGallery.offsetTop;
  let scrollPos = window.scrollY + window.innerHeight;
  let galleryBottom = sectionGallery.offsetTop + sectionGallery.offsetHeight;
  let isVisible = scrollPos > galleryTop && galleryBottom > window.scrollY;

  if (isVisible) window.scrollBy(0, 10);
}

// prevent opacity transition while pictures disappear
setTimeout(
  () =>
    images.forEach((item) =>
      item.setAttribute(
        "transition",
        "transition: transform 0.5s, opacity 0.5s"
      )
    ),
  100
);
