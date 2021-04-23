import * as paper from "paper";
import rgbHex from "rgb-hex";

paper.setup(document.getElementById("myCanvas"));

// Create a raster item using the image tag with id='mona'
// var raster = paper.Raster('logo');
var raster = new paper.Raster({
  source: "./mini.png",
  position: paper.view.center,
});

raster.on("load", function () {
  const colors = []; 
  for (var y = 0; y < raster.height; y++) {
    for (var x = 0; x < raster.width; x++) {
      // Get the color of the pixel:
      var color = raster.getPixel(x, y);

      console.log(x,y);

      console.log(rgbHex(color.red * 255, color.green * 255, color.blue * 255));
      
    }
  }
  
});
