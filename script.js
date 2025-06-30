const imageCount = 31;
const imageFolder = "PortfolioCompressed";
const imageExtension = "jpg";

const gallery = document.getElementById("gallery");

for (let i = 1; i <= imageCount; i++) {
  const img = document.createElement("img");
  img.src = `${imageFolder}/${i}.${imageExtension}`;
  img.alt = `Gallery image ${i}`;
  const div = document.createElement("div");
  div.className = "gallery-item";
  div.appendChild(img);
  gallery.appendChild(div);
}
