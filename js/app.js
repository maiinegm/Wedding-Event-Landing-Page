//-----------Countdown Function----------;
const currentYear = new Date().getFullYear();
// const CountDown = new Date(`November 9 ${currentYear + 1} 00:00:00`);
const CountDown = new Date(`November 9 2021 00:00:00`);

function countDownTime() {
  const currentDate = new Date();
  const timeGap = CountDown - currentDate;
  $("#day").text(Math.floor(timeGap / 1000 / 60 / 60 / 24));
  $("#hour").text(Math.floor(timeGap / 1000 / 60 / 60) % 24);
  $("#minute").text(Math.floor(timeGap / 1000 / 60) % 60);
  $("#second").text(Math.floor(timeGap / 1000) % 60);
  setTimeout(countDownTime, 1000);
}
countDownTime();

//------Accordion function for the timeline section----;
$(".accordionHeader").click(function () {
  $(".accordionBody").css("height", "0px");
  $(this).next().css("height", "146px");
});

//------Number of Characters Remaining Function----;
$("#textarea").keyup(function () {
  var valueLength = $(this).val().length;
  if (valueLength > 100) {
    $("#textMsg").text("Character Limit exceeded !");
    $("#textMsg").css("color", "red");
  } else {
    $("#count").text(100 - `${$(this).val().length}`);
  }
});

//-------------go to the top function--------------;
let aboutoffset = $("#about").offset().top;
$(window).scroll(function () {
  let scroltop = $(window).scrollTop();
  if (scroltop > aboutoffset) {
    $("#toTop").css("display", "block");
  } else {
    $("#toTop").css("display", "none");
  }
});
$("#toTop").click(function () {
  $("html,body").animate({ scrollTop: "0" }, 500);
});

//------help button function----;
let clicks = true;
$("#help").click(function () {
  if (clicks == true) {
    $("#helpMsg").css("left", "0px");
    $(this).css("left", "292px");
    return (clicks = false);
  } else {
    $("#helpMsg").css("left", "-292px");
    $(this).css("left", "0px");
    return (clicks = true);
  }
});
//------navbar changing with scroll ----;
$(window).scroll(function () {
  if ($(".navbar").offset().top > 50) {
    $(".navbar").addClass("shadow");
  } else {
    $(".navbar").removeClass("shadow");
  }
});
//------Navbar Active Links----;
$(".nav-link").click(function (e) {
  $(".nav-link").removeClass("active");
  $(e.target).addClass("active");
});
