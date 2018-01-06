$(document).ready(function() {

var number = 30; //declare timer value
$("#start").on("click", start); // start a new game
$("#submit").on("click", finish); // finish game
$("#restart").on("click", restart); // restart game

//  -------------------
//  ESTABLISH FUNCTIONS
//  -------------------

    function start() {
        counter = setInterval(timer, 1000);
        showIt(".question");
        showIt("#submit");
        hideIt("#start");
        hideIt("#restart");
    }
    function timer() {
        number-- // decrements timer by 1
        $("#show-timer").html("<h2>" + number + "</h2>");
        if (number === 0) {
            alert("Time is up!")
            stop(); //calls stop function
        }
    }
    function stop() {
        clearInterval(counter); //stopping the timer
        $("#restart").show();
        $(".answers").show();
        $(".question").hide();
        $("#submit").hide();
    }
    function finish () {
        timer = 1;
        clearInterval(counter); //stops timer
        hideIt("#show-timer");
        hideIt("#submit");
        hideIt(".question");
        showIt(".answers");
        showIt("#restart");
        alert("Check your answers!");
        timer();
    }
    function restart() {
        start();
    }
    function hideIt(i) {
        $(i).hide();
    }
    function showIt(i) {
        $(i).show();
    }
});


