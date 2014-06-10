// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;

  this.setPosition(top, left);
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

};

Dancer.prototype.lineup = function() {
  this.$node.animate({left: '0'}, 'medium');
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var randH = ($('body').height()  * Math.random()) % 100;
  var randW = ($('body').width() * Math.random()) % 100;
  if(Math.random() < .5) {
    randH = randH * -1;
  }
  if(Math.random() < .5) {
    randW = randW * -1;
  }
  this.$node.animate({top:'+=' + randH, left:'+=' + randW}, 'slow');
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left,
  };
  this.$node.css(styleSettings);
};
