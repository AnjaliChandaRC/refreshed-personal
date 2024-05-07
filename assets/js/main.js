// ================ YEAR FUNCTION
// JavaScript function to get current year
function getCurrentYear() {
  return new Date().getFullYear();
}
// Update the content of the span element with the current year
document.getElementById("currentYear").innerText = getCurrentYear();

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









