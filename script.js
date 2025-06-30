const imageCount = 31;
const imageFolder = "PortfolioCompressed";
const imageExtension = "jpg";
const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");

// Gallery generation
for (let i = 1; i <= imageCount; i++) {
  const img = document.createElement("img");
  img.src = `${imageFolder}/${i}.${imageExtension}`;
  img.alt = `Gallery image ${i}`;
  const div = document.createElement("div");
  div.className = "gallery-item";
  div.appendChild(img);
  gallery.appendChild(div);
}

// Lightbox functionality
gallery.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    lightboxImg.src = e.target.src;
    lightbox.classList.add("open");
  }
});

lightboxClose.addEventListener("click", function () {
  lightbox.classList.remove("open");
  lightboxImg.src = "";
});

lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && lightbox.classList.contains("open")) {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }
});
