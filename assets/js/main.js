// ================ YEAR FUNCTION
// JavaScript function to get current year
function getCurrentYear() {
  return new Date().getFullYear();
}
// Update the content of the span element with the current year
document.getElementById("currentYear").innerText = getCurrentYear();
