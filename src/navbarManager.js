$(document).ready(function() {
    $(".nav-link").on("click", function() {
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
      var target = $(this).attr("href");
      $(".tab-pane").removeClass("show active");
      $(target).addClass("show active").fadeIn(600);
    });
  });