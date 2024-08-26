function changeImage(imageNumber) {
  var imagePath;
  if (imageNumber === 1) {
    imagePath = "js/floormap_1f.svg";
  } else if (imageNumber === 2) {
    imagePath = "js/floormap_2f.svg";
  } else if (imageNumber === 3) {
    imagePath = "js/floormap_3f.svg";
  }else if (imageNumber === 4) {
    imagePath = "js/floormap_4f.svg";
  }
  document.getElementById("image").src = imagePath;
}
