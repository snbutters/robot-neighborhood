$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("input#number").val());