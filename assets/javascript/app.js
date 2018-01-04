$(".timer").hide();
$(".question").hide();

$(document).ready(function() {
//----------------------
//ESTABLISH TRIVIA TIMER
//----------------------
var timer = 60;
var intervalId;

$("#start").on("click", run);

$("#start").click(function(){
    $(".timer").show();
});

function run() {
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    timer--
    $("#show-timer").html("<h2>" + timer + "</h2>");
    if (timer === 0) {
        stop();
        alert("Time is up!");
    }
}
function stop() {
    clearInterval(intervalId);
}


});


