$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        event.preventDefault();
        var numberInput = $("input#number").val();
        var list =  $("div.output ul");
        list.empty();
        for(var i = 1; i <= numberInput; i++) {
        list.append(`<li>${convert(i)}</li>`);
      }
    });
});


function convert(number) {
    switch (true) {
      case (number % 15) === 0:
        return"PingPong!";
      case(number % 5) === 0:
        return "Pong!";
      case(number % 3) === 0:
        return "Ping!";
      default:
      return number;
    }
  }
