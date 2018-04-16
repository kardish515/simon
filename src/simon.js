function getColor(){
  var colorArray = ["red", "blue", "yellow", "green"];
  var colorIndex = Math.floor(Math.random() * 4);
  return colorArray[colorIndex];
}

export function Simon () {
  this.counter = 0;
  this.colorArray = [];
}

Simon.prototype.turn = function () {
  this.counter ++;
  this.colorArray.push(getColor());
  return this.colorArray;
};
