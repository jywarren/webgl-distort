// http://stackoverflow.com/questions/4998908/convert-data-uri-to-file-then-append-to-formdata

function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}

// gl.getParameter(gl.MAX_TEXTURE_SIZE); 
// > 16384 on an acer chromebook
// gl.getParameter(gl.MAX_RENDERBUFFER_SIZE);
// > 16384 on an acer chromebook

warpWebGl = function(id, matrix1, matrix2, download) {

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
  // image.parentNode.insertBefore(canvas, image);
  // image.parentNode.removeChild(image);

  if (download) {

    var blob = dataURItoBlob(canvas.toDataURL('image/png'));
    var burl = window.URL.createObjectURL(blob);
    window.open(burl);

  } else {
  // replace the image
//    image.src = canvas.toDataURL('image/png');
//    window.location = canvas.toDataURL('image/png');
    var blob = dataURItoBlob(canvas.toDataURL('image/png'));
    var burl = window.URL.createObjectURL(blob);
    image.src = burl;
  }

}
