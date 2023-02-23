function bosildi(photo) {
  next.src = photo.src;

  let images = document.getElementsByTagName("img");

  for (let i = 0; i < images.length; i++) {
    images[i].style = " ";
  }

  scr1.style = "transform:scale(1.15); border: 1px solid black;";
}
