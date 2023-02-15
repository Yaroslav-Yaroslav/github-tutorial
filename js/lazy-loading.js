if ("loading" in HTMLImageElement.prototype) {
  console.log("Wowow");
  addSrcAttrToLazyImages();
} else {
  console.log("Fofofo");
  addLazySizesScript();
}

function addLazySizesScript() {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  script.crrossOrigin = "anonymous";
  script.referrerPolicy = "no-referrer";
  document.body.append(script);
}
function addSrcAttrToLazyImages() {
  const lazyImages = document.querySelectorAll("img[loading='lazy']");
  lazyImages.forEach((image) => {
    image.src = image.dataset.src;
  });
}

const galleryImages = document.querySelectorAll("img[data-src]");

galleryImages.forEach((image) => {
  image.addEventListener("load", onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  evt.target.classList.add("appear");
}
