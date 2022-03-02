$(document).ready(function () {
  $("#chat-slider-button").click(function () {
    $("#chatting-group-right").toggleClass("active");
    $("#video-content-left").toggleClass("active");
    $("#chat-div").toggleClass("active");
  });
});