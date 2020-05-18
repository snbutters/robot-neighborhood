// Business Logic (back-end)

const beepBoop = function(number) {
  let result = [];
  for (let i = 0; i <= number; i++) {
    let input = i.toString();
    if (input.includes("3")) {
      result.push(" Won't you be my neighbor?");
    } else if (input.includes("2")) {
      result.push(" Boop!");
    } else if (input.includes("1")) {
      result.push(" Beep!");
    } else {
      result.push(input)
    }
  }
  return result;
};

// jQuery User Interface Logic

$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();
    const number = $("input#number").val();
    let result = beepBoop(number);
    $("#output").text(result);
    $("#result").show();
  });
});