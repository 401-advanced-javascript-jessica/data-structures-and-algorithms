'use strict';

const floodFill = require('../flood-fill');


describe('Test Find Leaf Nodes in a Binary Tree', () => {



  test('shoud floodfill an array with 3 rows and 3 columns', () => {
    let image = [[1,1,1],[1,1,0],[1,0,1]];
    let   sr = 1;
    let sc = 1;
    let newColor = 2;
    expect(floodFill(image, sr, sc, newColor)).toEqual(
      [[2,2,2],[2,2,0],[2,0,1]]);
  });

  test('shoud floodfill an array with 2 rows and 3 columns', () => {
    let image = [[1,1,1],[1,1,0]];
    let   sr = 1;
    let sc = 1;
    let newColor = 2;
    expect(floodFill(image, sr, sc, newColor)).toEqual([[2,2,2],[2,2,0]]);
  });


});

