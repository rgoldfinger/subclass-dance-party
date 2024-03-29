$(document).ready(function(){
  window.dancers = [];
  window.moverDancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var DancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    //
    // new window[BlinkyDancer](a, b, c);

    var dancer = new DancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    if(dancer.constructor === MovingDancer)
      window.moverDancers.push(dancer);
    else
      window.dancers.push(dancer);
  });

  $('.lineup').click(function(event) {
    for(var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineup();
    }
  });

  $('.dance').click(function(event) {
    for(var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].moveAround();
    }
  });

  $(document).keydown(function(event) {
    if(window.moverDancers.length > 0) {
      var moveV = 0;
      var moveH = 0;

      if(event.which === 37) {
        moveH = -5;
        moveV = 0;
      }
      if(event.which === 38) {
        moveH = 0;
        moveV = -5;
      }
      if(event.which === 39) {
        moveH = 5;
        moveV = 0;
      }
      if(event.which === 40) {
        moveH = 0;
        moveV = 5;
      }

      for (var i =0; i < window.moverDancers.length; i ++) {
        window.moverDancers[i].move(moveH, moveV);
      }

    }
  });


});

