var BouncyDancer = function(top, left, timeBetweenSteps){

  this.bodyHeight = $('body').height();

  var node = $('<img class="frog" height="200" width="200" src="http://gif-favicon.com/images/animals/green-tree-frog-transparent-background-0200-10011.gif"></img>');

  Dancer.call(this, this.bodyHeight, left, timeBetweenSteps, node);

  this.jump();

};

BouncyDancer.prototype = Object.create(Dancer.prototype);

BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.jump = function(){

  // call the old version of step at the beginning of any call to this new version of step

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.


  this.$node.animate({
    top: Math.random() * this.bodyHeight
  }, 500, 'easeOutCirc' );

  this.$node.animate({
    top: this.bodyHeight - 200
  }, 500, 'easeInCirc' );

  setTimeout(this.jump.bind(this), 1000);
};
