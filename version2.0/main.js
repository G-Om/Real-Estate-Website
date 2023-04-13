$(document).ready(function () {
  
  $(".nav-link").hover(
    function () {
      $(this).css("background-color", "rgb(241 188 49)");
      $(this).css("color", "white");
    },
    function () {
      $(this).css("background-color", "white");
      $(this).css("color", "#4d4d4d");
    }
  );
});
