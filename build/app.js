(function() {
  var menu = document.querySelector("ul"),
    menulink = document.querySelector(".menu");

  menulink.addEventListener("click", function(e) {
    menu.classList.toggle("active");
    e.preventDefault();
  });
})();

function displayWindowSize() {
  var w = document.documentElement.clientWidth;
  var activeClass = document.querySelector("ul");
  if (w > 768) {
    activeClass.classList.remove("active");
  }
}
window.addEventListener("resize", displayWindowSize);
displayWindowSize();
