var PulsingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass("dancer").addClass("pulsing-dancer");

};

PulsingDancer.prototype = Object.create(Dancer.prototype);

PulsingDancer.prototype.constructor = PulsingDancer;

PulsingDancer.prototype.parentStep = Dancer.prototype.step;

PulsingDancer.prototype.step = function() {
  this.parentStep();

  this.$node.animate({

    height:'+=150px',
    width:'+=150px'
  });

  this.$node.animate({

    height:'-=150px',
    width:'-=150px'
  });

};
