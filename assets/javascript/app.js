$(document).ready(function() {

$("#start").on("click", start); // start a new game
$("#submit").on("click", finish); // finish game
$("#restart").on("click", restart); // restart game


//  -------------------
//  ESTABLISH FUNCTIONS
//  -------------------

    function start() {
        showIt(".question");
        showIt("#submit");
        hideIt("#start");
        hideIt("#restart");
        hideIt(".answers");
        number = 31;
        counter = setInterval(timer, 1000);
        timer();
    }
    function timer() {
        showIt("#show-timer");
        number-- // decrements timer by 1
        $("#show-timer").html("<h2>" + number + "</h2>");
        if (number === 0) {
           alert("Time is up! Check your answers.")
           stop(); //calls stop function
       }
    }
    function stop() {
        clearInterval(counter); //stopping the timer
        $("#restart").show();
        $(".answers").show();
        $(".question").hide();
        $("#submit").hide();
        hideIt("#show-timer");
    }
    function finish () {
        clearInterval(counter); //stops timer
        hideIt("#show-timer");
        hideIt("#submit");
        hideIt(".question");
        showIt(".answers");
        showIt("#restart");
        alert("Check your answers!");
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