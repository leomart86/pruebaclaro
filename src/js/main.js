var countDownDate = new Date("Nov 1, 2023 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("newtime").innerHTML = "<span class='circ_timer'>" + days + "<span>DÍAS</span></span><span class='circ_timer'>" + hours + "<span>HRS</span> </span><span class='circ_timer'>" + minutes + "<span>MIN</span></span><span class='circ_timer'>" + seconds + "<span>SEG</span></span>";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("newtime").innerHTML = "FINAL";
  }
}, 1000);

