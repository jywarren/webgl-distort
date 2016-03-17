webgl-distort
====

A prototype, demonstration project to test full-resolution perspective transforms done in-browser on the client side using WebGL. This would be useful for [MapKnitter](https://mapknitter.org) (https://github.com/publiclab/mapknitter) or its interface core library, [Leaflet.DistortableImage](https://github.com/publiclab/DistortableImage), where users could individually download their distorted images at full resolution for print or other uses. 

Try this out in the demo at https://jywarren.github.io/webgl-distort

Eventually, it could be packaged as a bower-installable library which simply accepts an image URL and a begin and end matrix, and initiates a download (so as not to cause the browser to render the large dataURL).

This makes use of the [glfx.js](https://github.com/evanw/glfx.js) library. 
