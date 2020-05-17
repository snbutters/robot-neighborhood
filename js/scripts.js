// Business Logic (back-end)

const beepBoop = function(number) {
  const result = [];
  




// jQuery User Interface Logic

$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("input#number").val());


    $("#result").show();
  });
});