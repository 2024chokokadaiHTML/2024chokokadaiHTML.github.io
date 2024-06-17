function changeImage(imageNumber) {
  var imagePath;
  if (imageNumber === 1) {
    imagePath = ".floormap_1f.svg";
  } else if (imageNumber === 2) {
    imagePath = ".floormap_1f.svg";
  } else if (imageNumber === 3) {
    imagePath = ".floormap_1f.svg";
  }else if (imageNumber === 4) {
    imagePath = ".floormap_1f.svg";
  }
  document.getElementById("image").src = imagePath;
}
