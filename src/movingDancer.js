var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("moving-dancer");
  this._top = top;
  this._left = left;

};

MovingDancer.prototype = Object.create(Dancer.prototype);

MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function() {


};

MovingDancer.prototype.move = function(moveH, moveV) {
  this._top += moveV;
  this._left += moveH;

  this.$node.css({
    top: this._top + 'px',
    left: this._left + 'px'
  });
  console.log('top: ' + this._top + ' left: ' + this._left);

};
