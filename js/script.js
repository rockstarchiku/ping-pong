$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        var numberInput = $("input#number").val();
        var list =  $("div.output ul");
        list.empty();
        for(var i = 1; i <= numberInput; i++) {
        list.append(`<li>${convert(i)}</li>`);
      }
        event.preventDefault();
  });
});

function openBar() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeBar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


function convert(number) {
    switch (true) {
      case (number % 15) === 0:
        return"pingpong";
      case(number % 5) === 0:
        return "pong";
      case(number % 3) === 0:
        return "ping";
      default:
      return number;
    }
  }
