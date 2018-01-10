$("#go").click(function(){
    
    
    // build a function to see if a car has won the race
    function checkIfComplete() {
        
        // no car has won
        if (isComplete == false){
            isComplete = true;
        } else {
            place = 'second';
        }
        
    }
    
    //get the width of the cars
     var carWidth = $("#car1").width();
    
      //get the width of the  racetrack
    
    var raceTrackWidth = $(window).width() - carWidth;
    
    
    // generate a random number between 1 to 5000 for the seconds
    var raceTime1 = (Math.floor( Math.random() * 5000) + 1);
    var raceTime2 = (Math.floor( Math.random() * 5000) + 1);
    
    //flag for game being played
    
      var isComplete = false;
    
    //set a flag to first for the place in race
    
    var place = 'first';
    
    //animate car1
    $("#car1").animate({
        
        //move the car the the width of trackWidth;
        
        left: raceTrackWidth
    }, raceTime1, function(){
        
        // animation is complete
        
        
        
        // run a function to tell you i car has completed race;
        checkIfComplete();
        
        //give some text feedback in the race info
        
        $("#raceInfo1 span").text("finished in " + place + " place and clocked in at " + raceTime1 + " milliseconds");
        
    });
    //animate car2
    $("#car2").animate({
        
        //move the car the the width of trackWidth;
        
        left: raceTrackWidth
    }, raceTime2, function(){
        
        // animation is complete
        
        
        
        // run a function to tell you i car has completed race;
        checkIfComplete();
        
        //give some text feedback in the race info
        
        $("#raceInfo2 span").text("finished in " + place + " place and clocked in at " + raceTime2 + " milliseconds");
        
    });
    
});

$('#reset').click(function(){
    $(".car").css("left", "0");
    $(".raceInfo span").text("");
});