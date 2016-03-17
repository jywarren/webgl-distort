warpWebGl = function(id, matrix1, matrix2) {

  // try to create a WebGL canvas (will fail if WebGL isn't supported)
  try {
      var canvas = fx.canvas();
  } catch (e) {
      alert(e);
      return;
  }

  // convert the image to a texture
  var image = document.getElementById(id);
  var texture = canvas.texture(image);

  canvas.draw(texture).perspective(matrix1, matrix2).update();

  // replace the image with the canvas
  image.parentNode.insertBefore(canvas, image);
  image.parentNode.removeChild(image);

  // replace the image
  //image.src = canvas.toDataURL('image/png');

}
