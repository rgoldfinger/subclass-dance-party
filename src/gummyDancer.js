var GummyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer').addClass('gummy-dancer');

};

GummyDancer.prototype = Object.create(Dancer.prototype);

GummyDancer.prototype.constructor = GummyDancer;

GummyDancer.prototype.parentStep = Dancer.prototype.step;

GummyDancer.prototype.step = function() {
  this.parentStep();

  this.$node.animate({

    height:'5%',
    opacity:'50%'
  }, 'slow', 'easeOutBounce');

  this.$node.animate({

    width:'2%',
    opacity:'25%'
  }, 'slow', 'easeOutBounce');

  this.$node.animate({

    height:'10%',
    opacity:'50%'
  }, 'slow', 'easeOutBounce');

  this.$node.animate({

    width:'10%',
    opacity:'100%'
  }, 'slow', 'easeOutBounce');

};
