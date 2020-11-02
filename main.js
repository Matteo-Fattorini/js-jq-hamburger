$(".header-right > a").click(function () {
  $(".hamburger-menu").show();
});

$(".close").click(function () {
  $(".hamburger-menu").hide();
});




function checkWidth() {
  setInterval(function () {
    if ($(window).width() > 1000) {
      $(".hamburger-menu").hide();
    }
  }, 1);
}

checkWidth();
