// ===================== AUTHOR SLIDER JS
$(".author_slider").slick({
  arrows: false,
  dots: false,
  speed: 500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.5,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
});

// ================ YEAR FUNCTION
function getCurrentYear() {
  return new Date().getFullYear();
}
document.getElementById("currentYear").innerText = getCurrentYear();

