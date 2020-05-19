// Business Logic (back-end)

const beepBoop = function(number) {
  let result = [];
  for (let index = 0; index <= number; index += 1) {
    let input = index.toString();
    if (input.includes("3")) {
      result.push(" Won't you be my neighbor?");
    } else if (input.includes("2")) {
      result.push(" boop");
    } else if (input.includes("1")) {
      result.push(" beep");
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