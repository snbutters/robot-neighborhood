// Business Logic (back-end)

const beepBoop = function(number) {
  const array = [];
  for (i = 0; i <= number; i++) {
    let input = i.toString();

    if (input.includes("1")) {
      array.push("Beep!");
    } else if (input.includes("2")) {
      array.push("boop!");
    } else if (input.includes("3")) {
      array.push("Won't you be my neighbor?");
    }
    return array;
  }
};

// jQuery User Interface Logic

$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("input#number").val());


    $("#result").show();
  });
});