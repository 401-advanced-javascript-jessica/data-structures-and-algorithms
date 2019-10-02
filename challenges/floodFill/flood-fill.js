'use strict';

var floodFill = function(image, sr, sc, newColor){
  let originalColor = image[sr][sc];
  image[sr][sc] = newColor;
  image = floodFillHelper(image, sr, sc, newColor, originalColor);
  return image;
};

var floodFillHelper = function(image, sr, sc, newColor, originalColor) {
  const neighbors = [[-1,0],[0,-1],[0,1],[1,0]];

  for (let i = 0; i < neighbors.length; i++){

    let newSr = sr + neighbors[i][0];
    let newSc = sc + neighbors[i][1];

    if(image[newSr] !== undefined && image[newSr][newSc] !== undefined){

      if(image[newSr][newSc] === originalColor){
        image[newSr][newSc] = newColor;
        floodFillHelper(image, newSr, newSc, newColor, originalColor);

      }
    }
  }
  return image;
};

module.exports = floodFill;