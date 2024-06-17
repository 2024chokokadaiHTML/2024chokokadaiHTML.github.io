function changeImage(imageNumber) {
  var imagePath;
  if (imageNumber === 1) {
    imagePath = "https://github.com/2024chokokadaiHTML/chokomap2024.github.io/blob/main/floormap_1f.svg";
  } else if (imageNumber === 2) {
    imagePath = "https://github.com/2024chokokadaiHTML/chokomap2024.github.io/blob/main/floormap_1f.svg";
  } else if (imageNumber === 3) {
    imagePath = "https://github.com/2024chokokadaiHTML/chokomap2024.github.io/blob/main/floormap_1f.svg";
  }else if (imageNumber === 4) {
    imagePath = "https://github.com/2024chokokadaiHTML/chokomap2024.github.io/blob/main/floormap_1f.svg";
  }
  document.getElementById("image").src = imagePath;
}
