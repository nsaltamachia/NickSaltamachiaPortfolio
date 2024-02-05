$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed (in milliseconds)
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });
});
